import React from 'react';
import { Skill } from './Skill';
import styles from './Skills.module.css';

type SkillsProps = { 
  skills: Skill[];
};

type SkillState = {
  isExpanded: boolean;
};

class SkillComponent extends React.Component<Skill, SkillState> {
  constructor(props: Skill) {
    super(props);
    this.state = { isExpanded: false };
    this.toggleExpanded = this.toggleExpanded.bind(this);
  }
  
  render() {
    const isExpanded = this.state.isExpanded;
    const picture = this.props.picture;
    const name = this.props.name;
    const description = this.props.description;

    return (
      <div 
        onClick={ this.toggleExpanded }
        className={`${styles.skill} ${isExpanded ? styles.expanded : ''}`}
      >
        <img src={ picture.src } alt={ picture.alt } />
        
        <div className={ isExpanded ? '' : styles.displayNone }>
          <h3 className={ styles.center }>{ name }</h3>
          <div>{ description }</div>
        </div>
      </div>
    )
  }

  toggleExpanded() {
    this.setState(prevState => ({ isExpanded: !prevState.isExpanded }));
  }
}

export default function Skills({ skills }: SkillsProps): JSX.Element {
  return (<div className={ styles.container }>
    { skills.map((skill, index) => <SkillComponent {...skill} key={index} />) }
  </div>)
}
