import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import cn from 'classnames';
import styles from './../../styles/components/Navigation.module.scss';
import { CallIcon, DownArrowIcon } from './../../components/common/SvgIcons';


const data = [
	{
		id: 1,
		title: "home",
		link: "/",
		parentId: null
	}, {
		id: 2,
		title: "about",
		link: null,
		parentId: null
	}, {
		id: 3,
		title: "who we are",
		link: "/whoweare",
		parentId: 2
	}, {
		id: 4,
		title: "get involved",
		link: "/getinvolved",
		parentId: 2
	}, {
		id: 5,
		title: "camp",
		link: null,
		parentId: null
	}, {
		id: 6,
		title: "summer camp",
		link: "/summercamp",
		parentId: 5
	}, {
		id: 7,
		title: "junior counsellors",
		link: "/juniorcounsellors",
		parentId: 5
	}, {
		id: 8,
		title: "FAQ",
		link: "/faq",
		parentId: 5
	}, {
		id: 9,
		title: "scholarships",
		link: "/scholarships",
		parentId: null
	}, {
		id: 10,
		title: "donate",
		link: "/donate",
		parentId: null
	}
];


const Navigation = ({ ScrollToBottom, loadDonation }) => {
	const router = useRouter();

	const [scroll, setScroll] = useState(false);
	const [menuStatus, setMenuStatus] = useState(false);

	const handleScroll = () => {
		setScroll(window.scrollY > 200);
	};

    useEffect(() => {
    	handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

	return (
		<nav className={cn(styles.navbar, {
			[styles.active]: scroll
		})}>
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
			<ul className={ styles.normalMenu }>
				{
					data.map((item) => {
						if (!item.parentId) {
							return (
								<li 
									key={ `nav_li_${item.id}` }
									className={cn({
								        [styles.active]: (router.pathname === '/' && item.link === 'home') || (router.pathname === `${item.link}`)
								    })}
								>
									{
										!item.link ? (
											<>
												<Link href="/">
													<a onClick={ (event) => event.preventDefault() }>{ item.title }</a>
												</Link>
												<DownArrowIcon />
											</>
										) : (
											<Link href={ item.link }>
												<a>{ item.title }</a>
											</Link>
										)
									}

									{
										!item.link ? (
											<ul className={ styles.dropdown }>
												{
													data.map((subitem) => {
														if (subitem.parentId === item.id) {
															return (
																<li key={ `nav_subli_${subitem.id}` }>
																	<Link href={ subitem.link }>
																		<a>{ subitem.title }</a>
																	</Link>
																</li>
															)
														}
													})
												}
											</ul>
										) : (null)
									}
								</li>
							)
						}
					})
				}
			</ul>

			{
				!menuStatus ? (
					<div onClick={ () => setMenuStatus(true) }>
						{/*<MenuSvgIcon />*/}
					</div>
				) : (
					<>
						<div onClick={ () => setMenuStatus(false) }>
							<CloseSvgIcon />
						</div>
						<ul className={ styles.cascadeMenu }>
							{
								data.map((item) => {
									return (
										<li 
											key={ `nav_cascade_li_${item.id}` }
											className={cn({
										        [styles.active]: (router.pathname === '/' && item.link === 'home') || (router.pathname === `${item.link}`)
										    })}
										>
											<Link href={ item.link }>
												<a onClick={ (event) => ScrollToBottom(event) }>{ item.title }</a>
											</Link>
										</li>
									)
								})
							}
						</ul>
					</>
				)
			}
		</nav>
	)
};

export default Navigation;