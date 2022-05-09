import Link from 'next/link';
import styles from './../../styles/components/Promo.module.scss';
import { RightArrowWithCircleIcon } from './../../components/common/SvgIcons';


const DiffDays = (secondDate) => {
	const d = new Date();
	const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
	const firstDate = new Date(d.getUTCFullYear(), d.getUTCMonth() + 1, d.getUTCDate());

	return Math.round(Math.abs((secondDate - firstDate) / oneDay));
};


const Promo = () => {
	const firstWeekRegdDiff = DiffDays(new Date(2022, 5, 10));
	const firstWeekStartDiff = DiffDays(new Date(2022, 7, 10));
	const secondWeekRegdDiff = DiffDays(new Date(2022, 5, 17));
	const secondWeekStartDiff = DiffDays(new Date(2022, 7, 17));
	
	return (
		<section className={ styles.promo }>
			<div className={ styles.container }>
				<div>
					<h3>Registration for Summer Camp 2022 is now open!</h3>
					<div className={ styles.btnGroup }>
						<Link href="/joinus">
							<a className={ styles.primaryBtnInvert }>
								<span>Register Now!</span>
								<RightArrowWithCircleIcon />
							</a>
						</Link>
					</div>
				</div>
				<ul>
					<li>
						<h1>{ firstWeekRegdDiff }</h1>
						<h6>Days Left</h6>
						<p>For first-week camp registration deadline</p>
					</li>
					<li>
						<h1>{ firstWeekStartDiff }</h1>
						<h6>Days Left</h6>
						<p>Until first-week camp activity begins</p>
					</li>
					<li>
						<h1>{ secondWeekRegdDiff }</h1>
						<h6>Days Left</h6>
						<p>For second-week camp registration deadline</p>
					</li>
					<li>
						<h1>{ secondWeekStartDiff }</h1>
						<h6>Days Left</h6>
						<p>Until second-week camp activity begins</p>
					</li>
				</ul>
			</div>
		</section>
	)
};

export default Promo;