'use client'

import { FC } from 'react'
import {
	AboutUsCardList,
	Title,
	VacancyList,
	WorkForm,
} from '@/shared/components'
import styles from './Work.module.scss'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

const Work: FC = () => {
	const t = useTranslations('WorkPage')

	return (
		<div className={styles.work}>
			<Title title={t('title')} subtitle={t('subtitle')} />
			<section className={styles.work__desc}>
				<div className={styles.work__desc__text}>
					<p>
						<span>DevSolutions</span> - компания в области информационных
						технологий с аккредитацией, специализирующаяся на разработке
						заказного программного обеспечения.
					</p>
					<p>
						Наша экспертиза включает в себя <span>создание</span> веб и
						мобильных приложений. Мы предоставляем полный спектр услуг по
						разработке ПО - от сбора требований клиента до поддержки продукта
						после выпуска, благодаря нашим специалистам всех уровней.
					</p>
					<p>
						Основная задача нашей команды - <span> глубоко понимать </span>
						каждую задачу, поступающую от клиента, чтобы предложить оптимальное
						решение для его <span>бизнеса</span>.
					</p>
				</div>
				<Image
					src='/img/job.png'
					alt='img'
					className={styles.work__desc__img}
					width={800}
					height={800}
					draggable={false}
					aria-hidden={true}
				/>
			</section>
			<AboutUsCardList />
			<VacancyList />
			<section className={styles.common}>
				<h3 className={styles.common__title}>Только начинаешь?</h3>
				<p className={styles.common__subtitle}>
					Мы принимаем студентов на стажировки и производственные практики. Если
					Вы программист, тестировщик, дизайнер или аналитик – у Вас есть
					отличная возможность получить новые знания и профессиональный опыт.
				</p>
				<div className={styles.common__cards}>
					<div className={styles.common__cards__item}>
						<div className={styles.common__cards__item__header}>
							<p className={styles.common__cards__item__title}>Оставь заявку</p>
						</div>
						<p className={styles.common__cards__item__text}>
							Оставь заявку на сайте или напиши на почту
							vlad.eichwald@gmail.com, мы обязательно просмотрим твое резюме и
							дадим ответ
						</p>
					</div>
					<div className={styles.common__cards__item}>
						<div className={styles.common__cards__item__header}>
							<p className={styles.common__cards__item__title}>
								Выполни тестовое задание
							</p>
						</div>
						<p className={styles.common__cards__item__text}>
							Наш HR менеджер свяжется с тобой, выяснит все подробности и
							отправит тебе тестовое задание на выполнение
						</p>
					</div>
					<div className={styles.common__cards__item}>
						<div className={styles.common__cards__item__header}>
							<p className={styles.common__cards__item__title}>
								Пройди собеседование
							</p>
						</div>
						<p className={styles.common__cards__item__text}>
							После успешно выполненного тестового задания мы пригласим тебя на
							собеседование, где покажем тебе офис
						</p>
					</div>
				</div>
			</section>
			<WorkForm />
		</div>
	)
}

export default Work
