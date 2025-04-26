// ==UserScript==
// @name         Camunda All Incedents Restart
// @namespace    https://github.com/2bllk/Camunda-All-Incedents-Restart
// @version      1.0.0
// @description	 Batch restart incedents in Camunda Cockpit
// @description:ru  Добавляет кнопку для массовой перезагрузки инцидентов в Camunda Cockpit
// @author       2bllk
// @updateURL	 https://github.com/2bllk/Camunda-All-Incedents-Restart/raw/refs/heads/master/Camunda-All-Incedents-Restart.user.js
// @downloadURL	 https://github.com/2bllk/Camunda-All-Incedents-Restart/raw/refs/heads/master/Camunda-All-Incedents-Restart.user.js

// @match        https://*/app/cockpit/default/*
// @match        https://*/app/cockpit/default/*

// @icon         data:image/png;base64,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
// @grant        window.onurlchange

// @grant        GM_getResourceText
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @require      https://cdn.jsdelivr.net/npm/driver.js@latest/dist/driver.js.iife.js
// @resource     IMPORTED_CSS https://cdn.jsdelivr.net/npm/driver.js@latest/dist/driver.css

// ==/UserScript==

(function() {
    'use strict';

    let isFirstStart = GM_getValue("isFirstStart", true);

    const my_css = GM_getResourceText("IMPORTED_CSS");
    GM_addStyle(my_css);

    console.log('Script start');

    const CONFIG = {
        API_RETRY_BASE_URL: '/api/engine/engine/default',
        API_INCIDENTS_LIST_BASE_URL: '/api/cockpit/plugin/base/default',
        USE_ASYNC: false, // Флаг для переключения между синхронным/асинхронным режимом
        RELOAD_AFTER_START: true
    };

    const SELECTED_ROW_CLASS = 'selected-incident-row';
    const BUTTON_CONTAINER_CLASS = 'custom-buttons-container';
    const LOADING_CLASS = 'loading-button';

    // Переменные состояния
    let tableObserver = null;
    let globalObserver = null;
    let restartButton = null;
    let selectAllButton = null;
    let clearSelectionButton = null;

    let lastSelectedRow = null;
    let isCtrlPressed = false;
    let isShiftPressed = false;
    let isRowSelectionActive = false;

    function parseURL(url) {
        try {
            const currentUrl = new URL(url);
            const currentSubPathAfterHash = currentUrl.hash.substr(1);
            const pathAfterHash = new URL(currentSubPathAfterHash, currentUrl.origin);

            const sectionName = pathAfterHash.pathname.split('/')[1];
            const currentTab = pathAfterHash.searchParams.get('detailsTab');

            return {sectionName, currentTab};
        } catch (e) {
            console.error('Error parsing URL:', e);
            return {sectionName: null, currentTab: null};
        }
    }

    function getIncidentsTable() {
        return document.querySelector('.incidents-tab.cam-table.ng-scope');
    }

    function getSelectedTaskIds() {
        const table = getIncidentsTable();
        if (!table) return;

        const headers = Array.from(table.querySelectorAll('thead th')).map(th => th.textContent.trim());
        const processInstanceIndex = headers.findIndex(header => header === 'Process Instance');

        if (processInstanceIndex === -1) {
            alert('Cannot find "Process Instance" column!');
            return;
        }

        const selectedRows = document.querySelectorAll(`.${SELECTED_ROW_CLASS}`);
        let instances = [];

        if (selectedRows.length > 0) {
            instances = Array.from(selectedRows).map(row => {
                return row.cells[processInstanceIndex].textContent.trim();
            });
            console.log('Restarting selected instances:', instances);
        }

        return instances;
    }

    // Управление UI
    function updateButtons() {
        const selectedCount = document.querySelectorAll(`.${SELECTED_ROW_CLASS}`).length;
        const hasSelection = selectedCount > 0;

        restartButton.textContent = hasSelection ?
            `Restart selected (${selectedCount})` :
            'Restart all';
        selectAllButton.style.display = hasSelection ? 'none' : 'inline-block';
        clearSelectionButton.style.display = hasSelection ? 'inline-block' : 'none';
    }

    function setButtonLoading(isLoading) {
        if (isLoading) {
            restartButton.classList.add(LOADING_CLASS);
            restartButton.innerHTML = 'Restarting <div class="spinner"></div>';
            restartButton.style.pointerEvents = 'none';
        } else {
            restartButton.classList.remove(LOADING_CLASS);
            updateButtons();
            restartButton.style.pointerEvents = 'auto';
        }
    }

    function setupRowSelection() {
        const table = getIncidentsTable();
        if (!table) return;

        const rows = Array.from(table.querySelectorAll('tbody tr'));

        // Функция для управления блокировкой выделения текста
        const setTextSelection = (enabled) => {
            table.style.userSelect = enabled ? '' : 'none';
            isRowSelectionActive = !enabled;
        };

        setTextSelection(true);

        rows.forEach((row, index) => {
            if (!row.dataset.taskId) {
                row.dataset.taskId = row.cells[0]?.textContent.trim() || '';
                row.dataset.rowIndex = index;
            }

            row.addEventListener('click', (e) => {
                if (e.target.tagName === 'A') return;

                // Для Ctrl+Click или Select All
                if (e.ctrlKey || e.metaKey || e.shiftKey) {
                    e.preventDefault();
                    setTextSelection(false);

                    if (e.ctrlKey || e.metaKey) {
                        // Точечное выделение
                        row.classList.toggle(SELECTED_ROW_CLASS);
                        lastSelectedRow = row;
                    } else if (e.shiftKey && lastSelectedRow) {
                        // Выделение диапазона
                        const currentIndex = parseInt(row.dataset.rowIndex);
                        const lastIndex = parseInt(lastSelectedRow.dataset.rowIndex);

                        const start = Math.min(currentIndex, lastIndex);
                        const end = Math.max(currentIndex, lastIndex);

                        for (let i = 0; i < rows.length; i++) {
                            rows[i].classList.toggle(SELECTED_ROW_CLASS, i >= start && i <= end);
                        }
                    }
                } else {
                    // Обычный клик - сброс выделения
                    if (isRowSelectionActive) {
                        setTextSelection(true);
                    }
                    rows.forEach(r => r.classList.remove(SELECTED_ROW_CLASS));

                    // Обычное выделение без Ctrl
                    //row.classList.add(SELECTED_ROW_CLASS);
                    //lastSelectedRow = row;
                }

                updateButtons();
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Control' || e.key === 'Meta') {
                document.body.style.cursor = 'pointer';
            }
        });

        document.addEventListener('keyup', (e) => {
            if (e.key === 'Control' || e.key === 'Meta') {
                document.body.style.cursor = '';
            }
        });
    }

    function clearAllSelection(e) {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }

        const table = getIncidentsTable();
        const rows = table?.querySelectorAll('tbody tr') || [];
        rows.forEach(row => row.classList.remove(SELECTED_ROW_CLASS));

        // Восстанавливаем возможность выделения текста
        table.style.userSelect = '';
        isRowSelectionActive = false;
        lastSelectedRow = null;

        updateButtons();
    }

    function selectAllRows(e) {
        e.preventDefault();
        const table = getIncidentsTable();
        if (!table) return;

        // Блокируем выделение текста при Select All
        table.style.userSelect = 'none';
        isRowSelectionActive = true;

        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
            row.classList.add(SELECTED_ROW_CLASS);
        });
        lastSelectedRow = rows[rows.length - 1];
        updateButtons();
    }

    function getCookie(name) {
        const fullCookieString = '; ' + document.cookie;
        const splitCookie = fullCookieString.split('; ' + name + '=');
        return splitCookie.length === 2 ? splitCookie.pop().split(';').shift() : null;
    }

    // API вызовы
    async function callRestartExternalTasksAPI(body) {
        const endpoint = CONFIG.USE_ASYNC ?
            '/external-task/retries-async' :
            '/external-task/retries';

        const url = CONFIG.API_RETRY_BASE_URL + endpoint;
        const method = CONFIG.USE_ASYNC ? 'POST' : 'PUT';

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Xsrf-Token': getCookie('XSRF-TOKEN')
                },
                body: JSON.stringify(body),
                credentials: 'same-origin', // send cookies
                credentials: 'include' // send cookies, even in CORS
            });

            if (!response.ok) {
                const error = await response.json();
                // Если вызывается массовый метод и нет инцидентов такого типа, возвращается эта ошибка.
                // {"type":"InvalidRequestException","message":"externalTaskIds is empty"}
                if (error.message !== "externalTaskIds is empty") {
                    throw error;
                }
            }

            // При успешном ответе ничего не возвращается
            if (CONFIG.USE_ASYNC) {
                return await response.json();
            } else {
                return;
            }
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    async function callRestartJobsAPI(body) {
        const endpoint = CONFIG.USE_ASYNC ? '/job/retries' : '/job/retries';

        const url = CONFIG.API_RETRY_BASE_URL + endpoint;
        const method = CONFIG.USE_ASYNC ? 'POST' : 'POST';

        try {
            const response = await fetch(url, {
                method,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Xsrf-Token': getCookie('XSRF-TOKEN')
                },
                body: JSON.stringify(body),
                credentials: 'same-origin', // send cookies
                credentials: 'include' // send cookies, even in CORS
            });

            if (!response.ok) {
                const error = await response.json();
                // Если вызывается массовый метод и нет инцидентов такого типа, возвращается эта ошибка.
                // {"type":"InvalidRequestException","message":"jobIds is empty"}
                if (error.message !== "jobIds is empty") {
                    throw error;
                }
            }

            // При успешном ответе ничего не возвращается
            if (CONFIG.USE_ASYNC) {
                return await response.json();
            } else {
                return;
            }
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    function getCurrentProcessId() {
        return window.location.hash.split('/')[2];
    }

    async function getIncidents() {
        try {
            const response = await fetch(CONFIG.API_INCIDENTS_LIST_BASE_URL + '/incident/?firstResult=0&maxResults=50', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Xsrf-Token': getCookie('XSRF-TOKEN')
                },
                body: JSON.stringify({
                    processDefinitionIdIn:[getCurrentProcessId()],
                    activityIdIn:[]
                }),
                credentials: 'same-origin', // send cookies
                credentials: 'include' // send cookies, even in CORS
            });

            if (!response.ok) {
                const error = await response.json();
                throw error;
            }

            return await response.json();
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    async function handleRestart(e) {
        e.preventDefault();
        if (restartButton.classList.contains(LOADING_CLASS)) return;

        const selectedIds = getSelectedTaskIds();

        const incidents = await getIncidents();

        const externalTaskIds = incidents.filter((o) => selectedIds.includes(o.processInstanceId) && o.incidentType === 'failedExternalTask').map((o) => o.rootCauseIncidentConfiguration);
        const jobIds = incidents.filter((o) => selectedIds.includes(o.processInstanceId) && o.incidentType === 'failedJob').map((o) => o.rootCauseIncidentConfiguration);

        try {
            setButtonLoading(true);
            
            const hasSelection = selectedIds.length > 0;

            let jobsResult, externalTasksResult;

            if (externalTaskIds.length > 0 || !hasSelection) {
                const requestBody = hasSelection ?
                      {
                          retries: 1,
                          externalTaskIds: externalTaskIds,
                      }
                :
                {
                    retries: 1,
                    externalTaskQuery: {
                        processDefinitionId: getCurrentProcessId(),
                        noRetriesLeft: true
                    }
                };

                const result = await callRestartExternalTasksAPI(requestBody);

                externalTasksResult = result;
            }

            if (jobIds.length > 0 || !hasSelection) {
                const requestBody = hasSelection ?
                      {
                          retries: 1,
                          jobIds: jobIds,
                      }
                :
                {
                    retries: 1,
                    jobQuery: {
                        processDefinitionId: getCurrentProcessId(),
                        noRetriesLeft: true
                    }
                };

                const result = await callRestartJobsAPI(requestBody);

                jobsResult = result;
            }

            if (CONFIG.USE_ASYNC) {
                alert(`Operation started successfully:\n\nexternalTasks:${JSON.stringify(externalTasksResult, null, 2)}\njobs:${JSON.stringify(jobsResult, null, 2)}`);
            } else {
                // alert('Restart completed successfully');
            }

            clearAllSelection();

            if (CONFIG.RELOAD_AFTER_START) {
                setTimeout(() => location.reload(), 1000);
            }
        } catch (error) {
            alert(`Error: ${error.message || 'Unknown error'}\nCode: ${error.code || ''}`);
        } finally {
            if (!CONFIG.USE_ASYNC) {
                setButtonLoading(false);
            }
        }
    }

    function onboardingShow() {
        const driver = window.driver.js.driver;

        const driverObj = driver({
            showProgress: true,
            showButtons: ['next', 'previous'],
            disableActiveInteraction: true,
            steps: [
                { popover: { title: 'Camunda All Incedents Restart', description: 'Это небольной пошаговый гайд по работе со скриптом. Скрипт позволяет массово перезагружать инциденты бизнес-процесса, открытого в Camunda Cockpit.', side: "left", align: 'start' }},
                { element: restartButton, popover: { title: 'Рестарт всех инцидентов', description: 'Перезапустятся абсолютно все инциденты (job и externalTask) в данном бизнес-процессе в текущей версии процесса.', side: "left", align: 'start' }},
                {
                    element: selectAllButton,
                    popover: {
                        title: 'Выделить все инциденты', description: 'Выделяет все инциденты в таблице ниже. Так как в таблице используется пагинация, то кнопка выбирает всё только на текущей странице.', side: "bottom", align: 'start',
                        onNextClick: () => {
                            const clickEvent = new MouseEvent('click', {
                                bubbles: true,
                                cancelable: true,
                            });

                            selectAllButton.dispatchEvent(clickEvent);

                            driverObj.moveNext();
                        },
                    }
                },
                {
                    element: '.incidents-tab tbody',
                    popover: {
                        title: 'Выделить все инциденты', description: 'Все инциденты выделены.', side: "bottom", align: 'start',
                    }
                },
                {
                    element: clearSelectionButton,
                    popover: {
                        title: 'Снять выделение',
                        description: 'Если в таблице выделена хоть одна строка, то с помощью этой кнопки можно снять выделение.',
                        side: "bottom",
                        align: 'start',
                        onNextClick: () => {
                            const clickEvent = new MouseEvent('click', {
                                bubbles: true,
                                cancelable: true,
                            });

                            clearSelectionButton.dispatchEvent(clickEvent);

                            driverObj.moveNext();
                        },
                    }
                },
                {
                    element: '.incidents-tab tbody',
                    popover: {
                        title: 'Снять выделение', description: 'Выделение снято.', side: "bottom", align: 'start',
                    }
                },
                {
                    element: '.incidents-tab tbody',
                    popover: {
                        title: 'Выделение нужных инцидентов', description: 'В таблице можно выделять инциденты вручную, зажав клавишу Ctrl и кликнув по строке.', side: "bottom", align: 'start',
                        onNextClick: () => {
                            const clickEvent = new MouseEvent('click', {
                                bubbles: true,
                                cancelable: true,
                                ctrlKey: true, // указываем, что Ctrl нажат
                            });

                            document.querySelector('.incidents-tab tbody tr').dispatchEvent(clickEvent);

                            driverObj.moveNext();
                        },
                    }
                },
                {
                    element: '.incidents-tab tbody',
                    popover: {
                        title: 'Выделение нужных инцидентов', description: 'Зажав Shift, можно выделить диапазон.', side: "bottom", align: 'start',
                        onNextClick: () => {
                            const clickEvent = new MouseEvent('click', {
                                bubbles: true,
                                cancelable: true,
                                shiftKey: true,
                            });

                            document.querySelector('.incidents-tab tbody tr:nth-last-child(2)').dispatchEvent(clickEvent);

                            driverObj.moveNext();
                        },
                    }
                },
                {
                    element: restartButton,
                    popover: { title: 'Рестарт выделенных инцидентов', description: 'Когда в таблице есть выделение, по этой кнопке происходит рестарт только выделенных инцидентов.', side: "bottom", align: 'start' }
                }
            ]
        });

        driverObj.drive();

        GM_setValue("isFirstStart", false);
    }

    // Создание UI
    function createActionButtons() {
        const oldContainer = document.querySelector(`.${BUTTON_CONTAINER_CLASS}`);
        if (oldContainer) oldContainer.remove();

        const navPanel = document.querySelector('ul.nav-tabs');
        if (!navPanel) return null;

        const buttonContainer = document.createElement('li');
        buttonContainer.className = BUTTON_CONTAINER_CLASS;
        Object.assign(buttonContainer.style, {
            //display: 'flex',
            gap: '10px',
            marginLeft: '10px',
            alignItems: 'center'
        });

        restartButton = document.createElement('a');
        restartButton.href = '#';
        restartButton.className = 'restart-button';
        Object.assign(restartButton.style, {
            background: '#ff9393',
            borderRadius: '4px',
            padding: '5px 10px',
            cursor: 'pointer',
            display: 'inline-block'
        });

        selectAllButton = document.createElement('a');
        selectAllButton.href = '#';
        selectAllButton.textContent = 'Select all';
        selectAllButton.className = 'select-all-button';
        Object.assign(selectAllButton.style, {
            background: '#e6e6e6',
            borderRadius: '4px',
            padding: '5px 10px',
            cursor: 'pointer',
            display: 'inline-block'
        });

        clearSelectionButton = document.createElement('a');
        clearSelectionButton.href = '#';
        clearSelectionButton.textContent = 'Clear selection';
        clearSelectionButton.className = 'clear-selection-button';
        Object.assign(clearSelectionButton.style, {
            background: '#e6e6e6',
            borderRadius: '4px',
            padding: '5px 10px',
            cursor: 'pointer',
            display: 'none'
        });

        restartButton.addEventListener('click', handleRestart);
        selectAllButton.addEventListener('click', selectAllRows);
        clearSelectionButton.addEventListener('click', clearAllSelection);

        buttonContainer.appendChild(restartButton);
        buttonContainer.appendChild(selectAllButton);
        buttonContainer.appendChild(clearSelectionButton);
        navPanel.appendChild(buttonContainer);

        updateButtons();

        if (GM_getValue("isFirstStart", true)) {
            onboardingShow.bind(this)();
        }
    }

    function setupIncidentsTableObserver() {
        const incidentsTable = getIncidentsTable();

        if (incidentsTable && incidentsTable.rows.length > 0) {
            setupRowSelection();
            createActionButtons();
            return;
        }

        if (!incidentsTable) {
            setupGlobalObserver();
            return;
        }

        tableObserver = new MutationObserver(() => {
            if (incidentsTable.rows.length > 0) {
                setupRowSelection();
                createActionButtons();
                tableObserver.disconnect();
            }
        });

        tableObserver.observe(incidentsTable, {
            childList: true,
            subtree: true
        });
    }

    function setupGlobalObserver() {
        globalObserver = new MutationObserver(() => {
            const incidentsTable = getIncidentsTable();
            if (incidentsTable) {
                setupIncidentsTableObserver();
                globalObserver.disconnect();
            }
        });

        globalObserver.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    function handleUrlChange(url) {
        console.log('URL changed to:', url);

        const {sectionName, currentTab} = parseURL(url);

        if (tableObserver) tableObserver.disconnect();
        if (globalObserver) globalObserver.disconnect();

        if (sectionName === 'process-definition' && currentTab === 'pd-incidents-tab') {
            console.log('On incidents tab - setting up observer');
            setupIncidentsTableObserver();
        } else if (currentTab !== 'pd-incidents-tab') {
            const container = document.querySelector(`.${BUTTON_CONTAINER_CLASS}`);
            if (container) container.remove();
            restartButton = null;
            selectAllButton = null;
            clearSelectionButton = null;
        }
    }

    const style = document.createElement('style');
    style.textContent = `
        .${SELECTED_ROW_CLASS} {
            background-color: #e6f7ff !important;
            outline: 2px solid #1890ff !important;
        }
        .${SELECTED_ROW_CLASS} td {
            background-color: transparent !important;
        }
        .restart-button:hover {
            background-color: #ff6b6b !important;
        }
        .select-all-button:hover, .clear-selection-button:hover {
            background-color: #d4d4d4 !important;
        }
        .${LOADING_CLASS} {
            position: relative;
            padding-right: 30px !important;
        }
        .spinner {
            display: inline-block;
            position: absolute;
            right: 8px;
            top: 50%;
            transform: translateY(-50%);
            width: 16px;
            height: 16px;
            border: 2px solid rgba(255,255,255,0.3);
            border-radius: 50%;
            border-top-color: #fff;
            animation: spin 1s ease-in-out infinite;
        }
        @keyframes spin {
            to { transform: translateY(-50%) rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    // Инициализация
    if (window.onurlchange === null) {
        window.addEventListener('urlchange', (event) => {
            handleUrlChange(event.url);
        });
    }

    function initialize() {
        handleUrlChange(window.location.href);

        if (document.readyState !== 'complete') {
            document.addEventListener('DOMContentLoaded', () => {
                handleUrlChange(window.location.href);
            });
        }
    }

    initialize();
})();
