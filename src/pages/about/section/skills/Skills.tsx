import React from 'react';
import { Skill } from './Skill';
import styles from './Skills.module.css';

type SkillsProps = { 
  skills: Skill[];
};

type SkillsState = {
  acquainted: Skill[];
  confident: Skill[];
  selected?: Skill;
};

export default class Skills extends React.Component<SkillsProps, SkillsState> {
  constructor(props: SkillsProps) {
    super(props);
    
    const classifiedSkills = {
      acquainted: [],
      confident: []
    };

    this.state = props.skills.reduce((classifiedSkills, skill) => {
      if (skill.mastery === 'acquainted') classifiedSkills.acquainted.push(skill);
      else classifiedSkills.confident.push(skill);
      
      return classifiedSkills
    }, classifiedSkills);
  }

  public render() {
    return (
      <div>
        <div className={styles.selector}>
          <div>
            <h4>I'm confident in</h4>
            { this.buildSelector('confident') }
          </div>
    
          <div>
            <h4>I'm acquainted with</h4>
            { this.buildSelector('acquainted') }
          </div>
        </div>
        
        { this.state.selected ? this.displaySelected() : '' }
      </div>
    )  
  }

  private buildSelector(mastery: Skill['mastery']): JSX.Element {
    const skills = this.state[mastery];

    return (
      <div className={styles.selectorOptions}>{ 
        skills.map((skill, index) => (
          <div key={index} onClick={ e => this.selectSkill(skill, e) }>
            <img src={ skill.picture.src } alt={ skill.picture.alt } />
          </div>
        )) 
      }</div>
    );
  }

  private displaySelected(): JSX.Element {
    const skill = this.state.selected;
    
    return <div className={styles.selected}>
      <div className={styles.verticalAlign}>
        <img src={ skill.picture.src } alt={ skill.picture.alt } />
      </div>

      <div className={styles.verticalAlign}>
        <h3 className={ styles.center }>{ skill.name }</h3>
        <div>{ skill.description }</div>
      </div>
    </div>
  }

  private selectSkill(skill: Skill, e: React.MouseEvent) {
    this.setState(prevState => ({ selected: skill }));
  }
}
