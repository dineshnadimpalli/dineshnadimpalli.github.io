import React, { Component } from "react";
import "./ProjectLanguages.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

class ProjectLanguages extends Component {
    render() {
        return (
					<div>
						<div className="software-skills-main-div">
							<ul className="dev-icons-languages">
								{this.props.logos.map(logo => {
									return (
										<OverlayTrigger
											key={logo.name}
											placement={"bottom"}
											overlay={
												<Tooltip id={`tooltip-top`} style={{marginTop: 5}}>
													<strong style={{padding: 5, fontSize: 14}}>{logo.name}</strong>
												</Tooltip>
											}
										>
											<li
												className="software-skill-inline-languages"
												name={logo.skillName}
											>
												<span
													className="iconify"
													data-icon={logo.iconifyClass}
													style={logo.style}
													data-inline="false"
												></span>
											</li>
										</OverlayTrigger>
									);
								})}
							</ul>
						</div>
					</div>
				);
    }
}

export default ProjectLanguages;