

  // tabsMenuContainerSelector - родитель в котором лежат меню табов (нужен для делегирования события)
  // tabsSelectors - меню  (массив)
  // tabsContentSelector - содержимое табов (массив)

  function startTabs(tabsMenuContainerSelector, tabsSelectors, tabsContentSelector) {

    let info = document.querySelector(tabsMenuContainerSelector),
      tabs = document.querySelectorAll(tabsSelectors),
      tabContent = document.querySelectorAll(tabsContentSelector);
      
      //hideTabContent - функции, которая скрывает все табы, кроме таба с индексом startpos
      //showTabContent - функции, которая отображает все табы все табы с индексом B

    function hideTabContent(startpos) {
      for (let i = startpos; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
      }
    }

    hideTabContent(1);

    function showTabContent(b) {
      if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
      }
    }

    info.addEventListener('click', function (e) {
      let target = e.target;

      if (target && target.matches('div.info-header-tab')) {
        tabs.forEach((key, index) => {
          if (target == key) {
            hideTabContent(0);
            showTabContent(index);
          }
        });
      }
    });
  }

  startTabs('.info-header', '.info-header-tab', '.info-tabcontent');
  
  __________________________________________________________HTML_________________________________________________________________
  
  
  			<div class="info" >
				<div class="info-header">
					<div class="info-header-tab">Лечение</div> // название табов
					<div class="info-header-tab">Отдых</div>
					<div class="info-header-tab">Природа</div>
					<div class="info-header-tab">Йога</div>
				</div>
				<div class="info-tabcontent fade"> // сам таб и его содержимое
					<div class="description">
						<div class="description-title">Здоровый позвоночник</div>
						<div class="description-text">
						      какой-то тект внутри таба
						</div>
						<div class="description-btn">
							Узнать подробнее
						</div>
					</div>
					<div class="photo">
						<img src="img/massage.jpg" alt="Massage">
					</div>
				</div>
				<div class="info-tabcontent fade">  // сам таб и его содержимое
					<div class="description">
						<div class="description-title">Антистресс</div>
						<div class="description-text">
              					     какой-то тект внутри таба
           					</div>
						<div class="description-btn">
							Узнать подробнее
						</div>
					</div>
					<div class="photo">
						<img src="img/sunset.jpg" alt="sunset">
					</div>
				</div>
				<div class="info-tabcontent fade"> // сам таб и его содержимое
					<div class="description">
						<div class="description-title">Восстановление</div>
						<div class="description-text">
              					    какой-то тект внутри таба
           					</div>
						<div class="description-btn">
							Узнать подробнее
						</div>
					</div>
					<div class="photo">
						<img src="img/sunrise.jpg" alt="sunrise">
					</div>
				</div>
				<div class="info-tabcontent fade"> // сам таб и его содержимое
					<div class="description">
						<div class="description-title">Йога и аюрведа</div>
						<div class="description-text">
              				           какой-то тект внутри таба
            					</div>
						<div class="description-btn">
							Узнать подробнее
						</div>
					</div>
					<div class="photo">
						<img src="img/yoga.jpg" alt="yoga">
					</div>
				</div>
			</div>
  
