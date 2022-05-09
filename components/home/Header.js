import Image from 'next/image';
import Link from 'next/link';
import styles from './../../styles/components/Header.module.scss';
import { RightArrowWithCircleIcon } from './../../components/common/SvgIcons';


const Header = () => {
	return (
		<section className={ styles.header }>
			<header>
				<video width="100%" muted loop autoPlay>
					<source src="/images/landing/herovideo.mp4" type="video/mp4" />
				</video>
				<div className={ styles.text }>
					<h1>Academic Camps for Thinkers & Dreamers</h1>
					<h5>AICL creates an environment in which it is safe to laugh and learn, to risk and fail, and to experiment with something outside of one&apos;s competence.</h5>
					<div className={ styles.btnGroup }>
						<Link href="/joinus">
							<a className={ styles.primaryBtn }>
								<span>Register for summercamp&apos;22</span>
								<RightArrowWithCircleIcon />
							</a>
						</Link>
					</div>
				</div>
			</header>
		</section>
	)
};

export default Header;