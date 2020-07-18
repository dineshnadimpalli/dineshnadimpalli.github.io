import React, { Component } from "react";
import ExperienceCard from '../../components/experienceCard/ExperienceCard.js';
import "./ExperienceAccordion.css";
import { Accordion, Panel, StyledPanelContainer } from "baseui/accordion";

class ExperienceAccordion extends Component {
	render() {
		const theme = this.props.theme;
		return (
			<div className="experience-accord">
				<Accordion 
					onChange={({ expanded }) => console.log(expanded)}
					overrides={{
						Content: {
							style: ({ $theme }) => {
							  return {
								backgroundColor: 'transparent'
							  };
							}
						},
						Header: {
							style: ({ $theme }) => {
							  return {
								backgroundColor: theme.headerColor,
							  };
							}
						}
					}}
				>
					{this.props.sections.map((section) => {
						return (
							<Panel className="accord-panel" title={section["title"]} key={section["title"]}>
								{section["experiences"].map((experience, index) => {
									return (
										<ExperienceCard index={index} experience={experience} theme={theme} totalCards={section["experiences"].length}/>
									);
								})}
							</Panel>
						);
					})}
				</Accordion>
			</div>
		);
	}
}

export default ExperienceAccordion;
