import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import styled from 'styled-components';

const IconWrapper = styled.span`
	i {
		background-color: ${props => props.backgroundColor};
	}
	&:hover i {
		background-color: ${({theme}) => theme.text};
		transition: 0.3s ease-in;
	}
`

export default function socialMedia() {
  return (
		<div className="social-media-div">
			{
				socialMediaLinks.map(media=>{
					return (
						<a
							href={media.link}
							className={`icon-button ${media.className}`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<OverlayTrigger
								key={media.name}
								placement={"bottom"}
								overlay={
									<Tooltip id={`tooltip-top`} style={{marginTop: 5}}>
										<strong style={{padding: 5}}>{media.name}</strong>
									</Tooltip>
								}
							>
								<IconWrapper {...media}>
									<i className={`fab ${media.iconName}`}></i>
								</IconWrapper>
							</OverlayTrigger>
						</a>
					)
				})
			}
		</div>
	);
}
