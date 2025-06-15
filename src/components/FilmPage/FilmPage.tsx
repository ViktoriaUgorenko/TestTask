import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useState } from 'react';
import './FilmPage.css';

type NewsItem = {
    date: string;
    content: string;
};


type Actor = {
    name: string;
    originalName: string;
    photo: string;
};

// Компонент шапки
const Header: React.FC = () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleMobileNav = () => setMobileNavOpen(!mobileNavOpen);

    return (
        <header className="film-page-header">
            <div className="header-left">
                <div className="logo-block">
                    <span className="film-page-title">Film.</span>
                </div>
                <div className="vertical-line"></div>
                <div className="header-search">
                    <img src="img/search-icon.svg" alt="Search" className="search-icon" />
                    <input
                        type="text"
                        placeholder="Поиск по фильмам..."
                        className="search-input"
                    />

                </div>
            </div>

            <div className="header-center">
                <span className="film-page-nav-item">Фильмы</span>
                <span className="film-page-nav-item">ТВ</span>
                <span className="film-page-nav-item">Новости</span>
                <span className="film-page-nav-item">О сервисе</span>
            </div>
            <div className="vertical-line"></div>
            <div className="header-right">
                <button className="auth-btn">Регистрация</button>
                <button className="login-btn">Войти</button>
            </div>

            <button
                className="burger-menu"
                onClick={toggleMobileNav}
                aria-label="Открыть меню"
            >
                <div></div>
                <div></div>
                <div></div>
            </button>

            <div className={`mobile-nav ${mobileNavOpen ? 'active' : ''}`}>
                <div className="mobile-nav-items">
                    <span className="mobile-nav-item">Фильмы</span>
                    <span className="mobile-nav-item">ТВ</span>
                    <span className="mobile-nav-item">Новости</span>
                    <span className="mobile-nav-item">О сервисе</span>
                </div>
                <div className="menu-divider"></div>
                <div className="mobile-auth-buttons">
                    <button className="auth-btn">Регистрация</button>
                    <button className="auth-btn">Войти</button>
                </div>
            </div>

            <hr className="film-page-divider" />
        </header>
    );
};

// Компонент основного контента фильма
const FilmMainContent: React.FC = () => {
    return (
        <div className="film-content">
            <PosterSection />

            <div className="film-info">
                <h1 className="film-title">Охотники за привидениями: Наследники</h1>
                <h2 className="film-subtitle">Ghostbusters: Afterlife</h2>

                <DescriptionSection />
                <InfoGridSection />
                <RatingSection />
            </div>
        </div>
    );
};

// Секция постера
const PosterSection: React.FC = () => {
    return (
        <div className="poster">
            <div className="poster-block">
                <img
                    src="/img/poster.jpg"
                    alt="Постер фильма Охотники за привидениями: Наследники"
                    className="film-poster"
                />

            </div>
            <div className="play-button">
                <div className="play-trailer">
                    <div className="play-icon">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path d="M8 5V19L19 12L8 5Z" fill="#5671F6" />
                        </svg>
                    </div>
                    <span>Посмотреть трейлер</span>
                </div>
            </div>
        </div>
    );
};

// Секция описания
const DescriptionSection: React.FC = () => {
    return (
        <div className="film-description">
            <p className="description-text">
                Мать-одиночка с двумя детьми-подростками селится на старой ферме в Оклахоме,
                доставшейся им от деда. Дети пытаются узнать больше о своей семье, но находят
                вместо этого автомобиль Ecto-1 и таинственное устройство, которое, кажется,
                было частью какого-то охотничьего снаряжения. Вскоре странные явления приводят
                их к мысли, что их дед мог быть Охотником за привидениями...
            </p>
        </div>
    );
};

// Секция информационной сетки
const InfoGridSection: React.FC = () => {
    return (
        <div className="info-grid">
            <div className="info-group">
                <span className="info-label">Режиссер</span>
                <span>Джейсон Райтман</span>
            </div>
            <div className="info-group">
                <span className="info-label">Бюджет</span>
                <span>1 000 000 $</span>
            </div>
            <div className="info-group">
                <span className="info-label">Сценарий</span>
                <span>Дэн Эйкройд</span>
            </div>
            <div className="info-group">
                <span className="info-label">Кинопрокат</span>
                <span>SPPR</span>
            </div>
            <div className="info-group">
                <span className="info-label">Премьера</span>
                <span>09.07.2020 (РФ)</span>
            </div>
              <div className="info-group">
                <span className="info-label">Премьера</span>
                <span>09.07.2020 (РФ)</span>
            </div>
        </div>
    );
};

// Секция рейтинга
const RatingSection: React.FC = () => {
    return (
        <div className="rating-block">
            <div className="rating-circle">
                <span>92%</span>
            </div>
            <div className="rating-details">
                <span>Рейтинг зрителей</span>
                <span>Средняя оценка: 4,5/5</span>
                <span>Всего голосов: 4 350</span>
            </div>
        </div>

    );
};

// Компонент табов
const TabsSection: React.FC = () => {
    return (
        <div className="tabs-section">

            <div className="tabs">
                <div className="tab active">Актеры</div>
                <div className="tab">Создатели</div>
            </div>
        </div>
    );
};

// Секция актеров
const ActorsSection: React.FC = () => {
    const actors: Actor[] = [
        { name: "Кэрри Кун", originalName: "Carrie Coon", photo: "/img/Carrie.png" },
        { name: "МакКенна Грейс", originalName: "Mckenna Grace", photo: "/img/Mckenna.png" },
        { name: "Дэн Эйкройд", originalName: "Dan Aykroyd", photo: "/img/Den.jpg" },
        { name: "Билл Мюррей", originalName: "Bill Murray", photo: "/img/Bill.png" },
        { name: "Пол Радд", originalName: "Paul Rudd", photo: "/img/Paul.png" },
        { name: "Эрни Хадсон", originalName: "Ernie Hudson", photo: "/img/Ernie.png" },
        { name: "Энни Поттс", originalName: "Annie Potts", photo: "/img/Annie.png" },
        { name: "Финн Вулфард", originalName: "Finn Wolfhard", photo: "/img/Finn.png" },
    ];

    return (
        <div className="actors-section">
            <div className="actors-grid">
                {actors.map((actor, index) => (
                    <ActorCard
                        key={index}
                        name={actor.name}
                        originalName={actor.originalName}
                        photo={actor.photo}
                    />
                ))}
            </div>
        </div>
    );
};

// Карточка актера
const ActorCard: React.FC<Actor> = ({ name, originalName, photo }) => {
    return (
        <div className="actor-card">
            <img
                src={photo}
                alt={name}
                className="actor-photo"
            />
            <div className="actor-info">
                <strong>{name}</strong>
                <p>{originalName}</p>
            </div>
        </div>
    );
};

// Секция новостей
const NewsSection: React.FC = () => {
    const newsItems: NewsItem[] = [
        { date: "01 июня 2023", content: "«Морбиуса» и «Охотников за привидениями» перенесли на следующий год" },
        { date: "15 мая 2023", content: "Наследники: Вышел дебютный трейлер новых «Охотников за привидениями»" },
        { date: "28 апреля 2023", content: "Новые «Охотники за привидениями» обзавелись названием" },
        { date: "10 апреля 2023", content: "Завершились съёмки новых «Охотников за привидениями»" }
    ];

    return (
        <div className="news-section">
            <div className="news-content-wrapper">
                <h2 className="section-title">Новости по теме</h2>

                <div className="desktop-news">
                    {newsItems.map((news, index) => (
                        <NewsCard key={index} date={news.date} content={news.content} />
                    ))}
                </div>

                <div className="mobile-news">
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                    >
                        {newsItems.map((news, index) => (
                            <SwiperSlide key={index}>
                                <NewsCard date={news.date} content={news.content} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

// Карточка новости
const NewsCard: React.FC<NewsItem> = ({ date, content }) => {
    return (
        <div className="news-card">
            <div className="news-date">{date}</div>
            <p className="news-content">{content}</p>
        </div>
    );
};

// Главный компонент страницы
const FilmPage: React.FC = () => {
    return (
        <div className="film-page-container">
            <Header />

            <FilmMainContent />
            <div className="full-width-line"></div>

            <TabsSection />


            <ActorsSection />

            <NewsSection />
        </div>
    );
};

export default FilmPage;