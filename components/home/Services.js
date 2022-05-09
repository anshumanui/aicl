import Link from 'next/link';
import styles from './../../styles/components/Services.module.scss';
import { ScholarshipIcon, CounsellorIcon, FAQIcon, GetInvolvedIcon, RightArrowWithCircleIcon } from './../../components/common/SvgIcons';


const Services = () => {
	return (
		<section className={ styles.services }>
			<div className={ styles.container }>
				<div>
					<h6>Be a part of our journey</h6>
					<h2>Discover more about AICL</h2>
					<ul>
						<li>
							<Link href="/">
								<a>
									<div>
										<ScholarshipIcon />
									</div>
									<h5>Scholarships</h5>
									<p>AICL does offer scholarships to eligible campers in need of financial assistance.</p>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>
									<div>
										<FAQIcon />
									</div>
									<h5>FAQ's</h5>
									<p>Get all your queries resolved. It covers topics related to camp like food, accomodation, etc.</p>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>
									<div>
										<CounsellorIcon />
									</div>
									<h5>Junior Counsellors</h5>
									<p>Our Junior Counselor program is available for rising high school seniors.</p>
								</a>
							</Link>
						</li>
						<li>
							<Link href="/">
								<a>
									<div>
										<GetInvolvedIcon />
									</div>
									<h5>Get Involved</h5>
									<p>Be a part of AICL by volunteering, donating, or becoming an alumni.</p>
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
};

export default Services;