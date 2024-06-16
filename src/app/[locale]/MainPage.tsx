import { useTranslations } from 'next-intl'
import { FC } from 'react'
import styles from './MainPage.module.scss'
import classNames from 'classnames'
import { feedbackList, partnerList, projectList } from '@/shared/data'
import { Link } from '@/navigation'
import { BigButtonLink, ContactsForm, StackList } from '@/shared/components'
import Image from 'next/image'

const MainPage: FC = () => {
	const t = useTranslations('MainPage')
	return (
		<div className={styles.main_container}>
			<section className={styles.header}>
				<div className={styles.header__main}>
					<h1 className={styles.header__main__title}>{t('title')}</h1>
					<p className={styles.header__main__subtitle}>{t('subtitle')}</p>
					<ul className={styles.header__main__list}>
						<li className={styles.header__main__list__item}>#Web</li>
						<li className={styles.header__main__list__item}>#Mobile</li>
						<li className={styles.header__main__list__item}>#System</li>
					</ul>
				</div>
				<video
					className={styles.header__video}
					src={'/videos/main.mp4'}
					autoPlay
					loop
					muted
					playsInline
				></video>
			</section>
			<section className={classNames(styles.container, styles.projects)}>
				<div className={styles.projects__header}>
					<h2 className={styles.projects__header__title}>
						{t('header.1')}{' '}
						<span className={styles.projects__header__title_orange}>
							{t('header.2')}
						</span>
						{', '}
						<span className={styles.projects__header__title_orange}>
							{t('header.3')}
						</span>
						{` ${t('header.4')} `}
						<span className={styles.projects__header__title_orange}>
							{t('header.5')}
						</span>
					</h2>
					<p className={styles.projects__header__description}>
						{t('header.subtitle')}
					</p>
				</div>
				<div className={styles.projects__list}>
					{projectList.map(item => (
						<Link
							href={`/projects/${item.url}`}
							className={styles.projects__list__item}
							key={item.id}
						>
							<div className={styles.projects__list__item__content}>
								<StackList stack={item.stack} />
								<div className={styles.projects__list__item__content__title}>
									{item.title}
								</div>
								<div className={styles.projects__list__item__content__subtitle}>
									{item.subtitle}
								</div>
							</div>
							<div className={styles.projects__list__item__img}>
								<Image
									src={item.img}
									width={500}
									height={500}
									alt='Project Image'
								/>
							</div>
						</Link>
					))}
				</div>
				<BigButtonLink title={t('button')} href='/projects' />
			</section>
			<section className={classNames(styles.container, styles.partners)}>
				<h2 className={styles.partners__title}>{t('partners')}</h2>
				<ul className={styles.partners__grid}>
					{partnerList.map(partner => (
						<li key={partner} className={styles.partners__grid__item}>
							<Image
								src={`/img/partners/${partner}`}
								width={250}
								height={250}
								alt='Partner Image'
								draggable={false}
							/>
						</li>
					))}
				</ul>
			</section>
			<section className={classNames(styles.container, styles.feedback)}>
				<h2 className={styles.feedback__title}>{t('feedback')}</h2>
				<ul className={styles.feedback__grid}>
					{feedbackList.map(feedback => (
						<li key={feedback.company} className={styles.feedback__grid__item}>
							<div className={styles.feedback__grid__item_block}>
								<p className={styles.feedback__grid__item__title}>
									{feedback.company}
								</p>
								<p className={styles.feedback__grid__item__text}>
									{feedback.comment}
								</p>
							</div>
							<div className={styles.feedback__grid__item_block}>
								<p className={styles.feedback__grid__item__name}>
									{feedback.name}
								</p>
								<p className={styles.feedback__grid__item__position}>
									{feedback.position}
								</p>
							</div>
						</li>
					))}
				</ul>
			</section>
			<ContactsForm />
		</div>
	)
}

export default MainPage
