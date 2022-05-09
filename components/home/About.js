import Image from 'next/image';
import Link from 'next/link';
import styles from './../../styles/components/About.module.scss';
import { RightArrowWithCircleIcon } from './../../components/common/SvgIcons';


const About = () => {
	return (
		<section className={ styles.about }>
			<div className={ styles.container }>
				<div>
					<h6>Welcome to AICL</h6>
					<h2>Our Mission</h2>
					<h5>We celebrate the life of the mind.</h5>
					<p>At AICL, we see everyone as both a learner and a teacher. We encourage social and intellectual interactions that will enable our students to fulfill their personal, professional, and academic potential.</p>
					<p>When a camper comes to AICL, they have an opportunity to join a community of educators and students who are passionate about learning and creating.</p>
					<div className={ styles.btnGroup }>
						<Link href="/joinus">
							<a className={ styles.primaryBtn }>
								<span>Know More about us</span>
								<RightArrowWithCircleIcon />
							</a>
						</Link>
					</div>
				</div>
				<figure>
					<Image
						src="/images/landing/about.jpg"
						alt="about us"
						quality={85} 
						width={500}
						height={500}
					/>
					<h5>get involved</h5>
				</figure>
			</div>
		</section>
	)
};

export default About;