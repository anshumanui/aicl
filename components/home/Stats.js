import Link from 'next/link';
import styles from './../../styles/components/Stats.module.scss';
import { StudentsIcon, VolunteerIcon, ScholarshipIcon, SummerCampIcon, RightArrowWithCircleIcon } from './../../components/common/SvgIcons';


const Stats = () => {
	return (
		<section className={ styles.stats }>
			<div className={ styles.container }>
				<h6>Figures that we proudly boast</h6>
				<h2>AICL&apos;s Interesting Stats</h2>

				<ul>
					<li>
						<StudentsIcon />
						<h1>768</h1>
						<h5>Students enrolled</h5>
					</li>
					<li>
						<VolunteerIcon />
						<h1>124</h1>
						<h5>volunteers participated</h5>
					</li>
					<li>
						<ScholarshipIcon />
						<h1>359</h1>
						<h5>scholarships awarded</h5>
					</li>
					<li>
						<SummerCampIcon />
						<h1>10</h1>
						<h5>summer camps</h5>
					</li>
				</ul>

				<div className={ styles.btnGroup }>
					<Link href="/joinus">
						<a className={ styles.primaryBtn }>
							<span>Register for summercamp&apos;22</span>
							<RightArrowWithCircleIcon />
						</a>
					</Link>
				</div>
			</div>
		</section>
	)
};

export default Stats;