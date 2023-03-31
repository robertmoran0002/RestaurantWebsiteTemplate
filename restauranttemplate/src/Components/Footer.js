import React from "react";
import {
	Box,
	Container,
	Row,
	Column,
	FooterLink,
	Heading,
} from "./FooterStyle";
import CategoryLinks from './CategoryLinks';

const Footer = () => {
	const menuLinks = CategoryLinks();
	return (
		<Box>
			<h1 style={{
				color: "white",
				textAlign: "center",
				marginTop: "-50px"
			}}>
				Restaurant
			</h1>
			<Container fluid>
				<Row>
					<Column>
						<Heading>Menu</Heading>
						{ menuLinks }
						<FooterLink href="#"></FooterLink>
						<FooterLink href="#"></FooterLink>
					</Column>
					<Column>
						<Heading>About Us</Heading>
						<FooterLink href="#">Our Story</FooterLink>
						<FooterLink href="#">Catering</FooterLink>
					</Column>
					<Column>
						<Heading>Contact Us</Heading>
						<FooterLink href="#">Phone: (555) 555-5555</FooterLink>
						<FooterLink href="#">Email: restaurant@restaurant.com</FooterLink>
					</Column>
					<Column>
						<Heading>Social Media</Heading>
						<FooterLink href="#">
							<i className="fab fa-facebook-f">
								<span style={{ marginLeft: "10px" }}>
									Facebook
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-instagram">
								<span style={{ marginLeft: "10px" }}>
									Instagram
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-twitter">
								<span style={{ marginLeft: "10px" }}>
									Twitter
								</span>
							</i>
						</FooterLink>
						<FooterLink href="#">
							<i className="fab fa-youtube">
								<span style={{ marginLeft: "10px" }}>
									Youtube
								</span>
							</i>
						</FooterLink>
					</Column>
				</Row>
			</Container>
		</Box>
	);
};
export default Footer;
