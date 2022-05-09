import Link from 'next/link';
import Image from 'next/image';
import styles from './../../styles/components/Footer.module.scss';


const Footer = () => {
	return (
		<section className={ styles.footer }>		
			<div className={ styles.container }>
				<div className={ styles.upperLayer }>
					<div>
						<Link href="/">
							<a className={ styles.logo }>
								<figure>
									<Image
										src="/landing/logo.jpg"
										alt="logo"
										quality={85} 
										width={150}
										height={138}
									/>
								</figure>
								<span>Academic Camps for Thinkers & Dreamers</span>
							</a>
						</Link>

						<button className={ styles.primaryBtn }>Donate</button>
					</div>

					<div>
						<h5>Links</h5>
						<ul>
							<li>
								<Link href="/">
									<a>Home</a>
								</Link>
							</li>
							<li>
								<Link href="/">
									<a>Who we are</a>
								</Link>
							</li>
							<li>
								<Link href="/">
									<a>Get involved</a>
								</Link>
							</li>
							<li>
								<Link href="/">
									<a>Summer camp</a>
								</Link>
							</li>
							<li>
								<Link href="/">
									<a>junior counsellors</a>
								</Link>
							</li>
							<li>
								<Link href="/">
									<a>FAQ</a>
								</Link>
							</li>
							<li>
								<Link href="/">
									<a>scholarships</a>
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h5>Contact</h5>
						<ul>
							<li>
								<h6>Email</h6>
								<Link href="/">
									<a>operationsmanager@appalachianinstitute.org</a>
								</Link>
							</li>
							<li>
								<h6>Phone</h6>
								<Link href="/">
									<a>1-828-782-3299</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className={ styles.lowerLayer }>
					<p>&copy; 2022 by Appalachian Institute for Creative Learning. All Rights Reserved.</p>
				</div>
			</div>
		</section>
	)
};

export default Footer;