import React from 'react';
import { Skill } from './Skill';
import Rating from '@site/src/components/Rating/Rating';
import styles from './Skills.module.css';

type SkillsProps = { 
  skills: Skill[];
};

type SkillsState = {
  selected?: Skill;
};

export default class Skills extends React.Component<SkillsProps, SkillsState> {
  constructor(props: SkillsProps) {
    super(props);

    this.state = {
      selected: undefined
    };
  }

  public render() {
    return (
      <div>
        <div className={styles.selector}>
          { this.buildSelector() }
        </div>
        
        { this.state.selected ? this.displaySelected() : '' }
      </div>
    )  
  }

  private buildSelector(): JSX.Element {
    const skills = this.props.skills.sort((a, b) => b.confidence - a.confidence);

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
        <p>
          <strong>Confidence: </strong>
          <Rating value={ skill.confidence } total={ 5 } />
        </p>
        <p style={{ whiteSpace: 'pre-line' }}>{ skill.description }</p>
      </div>
    </div>
  }

  private selectSkill(skill: Skill, e: React.MouseEvent) {
    this.setState(prevState => ({ selected: skill }));
  }
}
