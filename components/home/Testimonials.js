import Image from 'next/image';
import Link from 'next/link';
import styles from './../../styles/components/Testimonials.module.scss';
import { QuoteIcon, DownArrowIcon, RightArrowWithCircleIcon } from './../../components/common/SvgIcons';


const Testimonials = () => {
	return (
		<section className={ styles.testimonials }>
			<div className={ styles.container }>
				<div>
					<h6>What people say</h6>
					<h2>Testimonials</h2>

					<div className={ styles.testimonialsWrapper }>
						<figure>
							<Image
								src={ `/images/testimonials/1.jpg` }
								alt="testimonial"
								quality={85} 
								width={150}
								height={150}
							/>
						</figure>
						<div>
							<QuoteIcon />
							<p>The caring and intelligence of the staff is evident in each person that I&apos;ve encountered. And one thing that I appreciate about AICL is that it makes room for the kids that are a little bit different, a little bit outside the mainstream. Every kid seems to find their place there. AICL is the highlight of my daughters&apos; summer, and it has been for four years now. I highly recommend it.</p>
							<h5>Patrick Wilson</h5>
							<p>Parent</p>
							<ul>
								<li><DownArrowIcon /></li>
								<li><DownArrowIcon /></li>
							</ul>
						</div>
						<figure>
							<Image
								src={ `/images/testimonials/bg1.jpg` }
								alt="testimonial"
								quality={85} 
								width={600}
								height={400}
							/>
						</figure>
					</div>
				</div>
			</div>
		</section>
	)
};

export default Testimonials;