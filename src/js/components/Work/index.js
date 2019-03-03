import React from 'react';
import WorkProjects from '../../../data/work';

export default class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
            workProjects: WorkProjects
        }
    }

    componentDidMount() {
        console.log(this.state.workProjects);
    }

    render() {
        const projects = (this.state.workProjects).map((project, i) => (
            <article key={`work-project-${project.id}`} className='work-project'>
                <h2 className='work-project__name work-project__name--mobile sm-desktop-up'><a href={project.link} title={`Go to ${project.title}`}>{project.title}</a><span>{project.id.toString().length < 2 ? '0' : ''}{project.id.toString()}</span></h2>
                <div className='work-project__image-wrapper'>
                    <a href={project.link} title={`Go to ${project.title}`}>
                        <img className='work-project__image' src='http://placehold.it/900x450' alt={`${project.title} screenshot`}></img>
                    </a>
                </div>
                <div className='work-project__info-wrapper'>
                    <div className='work-project__info'>
                        <div className='work-project__header'>
                            <h2 className='work-project__name tablet-down'>{project.title}</h2>
                            <a href={project.link} className='work-project__link'>Website</a>
                        </div>
                        <p className='work-project__description'>{project.description}</p>
                    </div>
                </div>
            </article>
        ));
        return (
            <React.Fragment>
                <h1>Work</h1>
                <article className='work'>
                    {projects}
                </article>
            </React.Fragment>
        )
    }
}