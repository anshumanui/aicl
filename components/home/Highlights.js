import Link from 'next/link';
import Image from 'next/image';
import styles from './../../styles/components/Highlights.module.scss';
import { LeftArrowIcon, RightArrowIcon, RightArrowWithCircleIcon } from './../../components/common/SvgIcons';


const Highlights = () => {
	return (
		<section className={ styles.highlights }>
			<div className={ styles.container }>
				<div className={ styles.halfContainer }>
					<div className={ styles.wrapper }>
						<h6>Last year showreel</h6>
						<h2>Camp&apos;21 Highlights</h2>

						<p>Bunch of lines here which makes no sense but is perfectly required to make this a proper paragraph and render this section beautifully and make viewers understand that they need to read it whether it makes sense or not.</p>

						<div className={ styles.btnGroup }>
							<Link href="/joinus">
								<a className={ styles.primaryBtn }>
									<span>Register for summercamp&apos;22</span>
									<RightArrowWithCircleIcon />
								</a>
							</Link>
						</div>
					</div>
				</div>
				<div className={ styles.sliderContainer }>
					<div className={ styles.sliderWrapper }>
						<div className={ styles.enclosedCover }></div>
						<ul>
							{
								[...Array(4).keys()].map((item) => {
									return (
										<li key={ `li_showcase_${item}` }>
											<figure>
												<Image
													src={ `/images/gallery/${item + 1}.jpg` }
													alt="last year event"
													quality={85} 
													width={600}
													height={400}
												/>
											</figure>
										</li>
									)
								})
							}
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
};

export default Highlights;