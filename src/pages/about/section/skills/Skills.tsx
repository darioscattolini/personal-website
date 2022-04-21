import React from 'react';
import ThemedImage from '@theme/ThemedImage';
import { Skill } from './Skill';
import Rating from '@site/src/components/Rating/Rating';
import styles from './Skills.module.css';
import SplitParagraphs from '../../../../components/SplitParagraphs/SplitParagraphs';

type SkillsProps = { 
  skills: Skill[];
};

type SkillsState = {
  selected?: number;
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
        
        { this.buildSkills() }
      </div>
    )  
  }

  private buildSelector(): JSX.Element {
    const skills = this.props.skills.sort((a, b) => b.confidence - a.confidence);

    return (
      <div className={styles.selectorOptions}>{ 
        skills.map((skill, key) => (
          <div key={key} onClick={ e => this.selectSkill(key, e) }>
            <ThemedImage 
              sources={{
                light: skill.picture.srcLight,
                dark: skill.picture.srcDark
              }} 
              alt={ skill.picture.alt } 
              title={ skill.name }
            />
          </div>
        )) 
      }</div>
    );
  }

  private buildSkills(): JSX.Element {
    return (
      <div>
        { this.props.skills.map((skill, key) => (
          <div key={key}
            className={
              `${ 
                styles.skill
              } ${
                this.state.selected === key ? styles.selected : '' 
              }`
            }
          >
            <div className={styles.verticalAlign}>
              <ThemedImage 
                sources={{
                  light: skill.picture.srcLight,
                  dark: skill.picture.srcDark
                }} 
                alt={ skill.picture.alt } 
              />
            </div>
    
            <div className={styles.verticalAlign}>
              <h3 className={ styles.center }>{ skill.name }</h3>
              <p>
                <strong>Confidence: </strong>
                <Rating value={ skill.confidence } total={ 5 } />
              </p>
              <SplitParagraphs paragraphs={ skill.description } />
            </div>
          </div>
        )) }
      </div>
    )
  }

 /* private displaySelected(): JSX.Element {
    const skill = this.state.selected;
    
    return (
      <div className={styles.selected}>
        <div className={styles.verticalAlign}>
          <ThemedImage 
            sources={{
              light: skill.picture.srcLight,
              dark: skill.picture.srcDark
            }} 
            alt={ skill.picture.alt } 
          />
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
    )
  }*/

  private selectSkill(skill: number, e: React.MouseEvent) {
    this.setState(prevState => ({ selected: skill }));
  }
}
