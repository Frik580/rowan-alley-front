import "./AboutProject.css";

function AboutProject() {
  return (
    <div className="about-project">
      <h2 className="about-project__title">О ПРОЕКТЕ</h2>
      <div className="about-project__conteiner">
        <div className="about-project__column">
          <p className="about-project__paragraph">
            События последнего времени поставили вопросы сохранения исторической
            памяти в разряд приоритетных. Уникальность проекта ПКО МОФ
            «Российский фонд мира» - «Рябиновая аллея Героев» в том, что
            Ключевая идея предложена самими школьниками города Перми. И связано
            это с их личным знакомством с Василием Михайловичем Астафьевым,
            последним Героем Советского Союза в Пермском крае, человеком с
            уникальной Судьбой, и до последнего времени - активным МИРотворцем.
            Он горячо поддержал инициативу ребят: создание виртуальной экскурсии
            "Рябиновая аллея Героев" и создание в центре города на Рябиновой
            аллее особого места Живой памяти. Там в 2013 году была установлена
            памятная Стела Героям Советского Союза, нашим землякам, и первым в
            списке стоит имя В.М. Астафьева.
          </p>
          <p className="about-project__paragraph">
            25 октября 2021 года в 102 День рождения Василия Михайловича
            состоялась встреча ребят с Героем - театрализованное поздравление
            "Синий платочек" под окнами его дома. А 10 марта 2022 года мы
            простились с нашим последним Героем. И для нас всех сейчас дело
            чести сдержать слово, данное Василию Михайловичу - всем миром
            создать особое место живой памяти на Рябиновой аллее Героев на улице
            Екатерининская родного города Перми.
          </p>
        </div>
        <div className="about-project__column">
          <p className="about-project__paragraph">
            В реализации Проекта, поддержанного Фондом президентских грантов,
            приняли участие творческие (исследовательские) команды учащихся и
            педагогов 48 школ Пермского края. Судьба и подвиг пятидесяти Героев
            Советского Союза – наших земляков легли в основу документальных
            фильмов, созданных учащимися в ходе реализации Проекта.
          </p>
          <p className="about-project__paragraph">
            Творческий процесс была увлекательным и очень непростым: работа с
            архивными документами, знакомство с современными технологиями
            видеосъемки и монтажа, поисковая деятельность, и как результат –
            Виртуальная экскурсия «Рябиновая аллея Героев». А это значит, что
            сейчас у любого человека есть возможность из любой точки Прикамья,
            России, мира зайти на сайт и пройти вместе с нашими Героями их путь
            к подвигу…
          </p>
          <p className="about-project__paragraph">
            <i>
              Благодарим за бескорыстную помощь в создании Виртуальной экскурсии
              «Рябиновая аллея Героев» наших друзей - единомышленников: Марию
              Дурбале, Ольгу Печкурову, Арсения Герасимчука, Олесю Астафьеву.
            </i>
          </p>
          <p
            className="about-project__paragraph"
            style={{ textAlign: "right", marginTop: 30 }}
          >
            С пожеланием Мира, председатель Правления ПКО МОФ «Российский фонд
            мира»
          </p>
          <p
            className="about-project__paragraph"
            style={{ textAlign: "right" }}
          >
            <i>Любовь Герасимчук</i>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutProject;
