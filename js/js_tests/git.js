/**
 * Created by Vlad on 11.07.2017.
 */
var questionsArray = [
  {
    question    : 'Открыть страницу руководства по любой команде Git',
    variants    : [ '$ git help <команда>',
                    '$ git <команда>',
                    '$ man git-<команда>',
                    '$ git diff',
                    '$ git clone [url]',
                    '$ git status',
                    '$ git init'
    ],
    type        : 'checkbox', // radio/checkbox
    rightAnswers: [ '$ git help <команда>', '$ git <команда>', '$ man git-<команда>' ],
    explanations:''
  },
  
  {
    question    : 'Создание репозитория в существующем каталоге',
    variants    : [ '$ git init',
                    '$ git status',
                    '--short',
                    '$ git remote'
    ],
    type        : 'radio', // radio/checkbox
    rightAnswers: [ '$ git init' ],
    explanations:'<p>Эта команда создаёт в текущем каталоге новый подкаталог с именем .git содержащий все необходимые файлы репозитория — основу Git-репозитория.</p>'
  },

  {
    question    : 'Для начала отслеживания (добавления под версионный контроль) нового файла, используется команда',
    variants    : [ '$ git add',
                    '$ git remote',
                    '$ git status',
                    '$ git push [server-name] --delete [branch-name]'
    ],
    type        : 'radio', // radio/checkbox
    rightAnswers: [ '$ git add' ],
    explanations:''
  },

  {
    question    : 'Чтобы знать, что конкретно поменялось, а не только какие файлы были изменены',
    variants    : [ '$ git diff',
                    '$ git clone [url]',
                    '$ git status',
                    '$ git push [server-name] --delete [branch-name]'
    ],
    type        : 'radio', // radio/checkbox
    rightAnswers: [ '$ git diff' ],
    explanations:''
  },

  {
    question    : 'Для клонирования существующего репозитория',
    variants    : [ '$ git clone [url]',
                    '$ git status -s',
                    '$ git status',
                    '$ git remote'
    ],
    type        : 'radio', // radio/checkbox
    rightAnswers: [ '$ git clone [url]' ],
    explanations:''
  },

  {
    question    : 'Для определения, какие файлы в каком состоянии находятся',
    variants    : [ '$ git status',
                    '$ git branch [branch-name]',
                    '$ git fetch [remote-name]',
                    '$ git pull'
    ],
    type        : 'radio', // radio/checkbox
    rightAnswers: [ '$ git status' ],
    explanations:''
  },

  {
    question    : 'Что будет, если команде add передать путь к каталогу, а не к файлу',
    variants    : [ 'команда рекурсивно добавит (проиндексирует) все файлы в данном каталоге',
                    'команда добавить первый файл в каталоге',
                    'команда не будет выполнена',
                    'это приведёт к ошибке'
    ],
    type        : 'radio', // radio/checkbox
    rightAnswers: [ 'команда рекурсивно добавит (проиндексирует) все файлы в данном каталоге' ],
    explanations:''
  },
  
  {
    question    : 'Для чего используется команда add',
    variants    : [ 'для добавления под версионный контроль новых файлов',
                    'для индексации изменений',
                    'для указания файлов с исправленным конфликтом слияния',
                    'для создания новой ветки',
                    'для создания нового коммита'
    ],
    type        : 'checkbox', // radio/checkbox
    rightAnswers: [ 'для добавления под версионный контроль новых файлов', 'для индексации изменений', 'для указания файлов с исправленным конфликтом слияния' ],
    explanations:'Может быть понятнее, если думать об этом как "добавить этот контент в следующий коммит", а не как "добавить этот файл в проект".'
  },

  {
    question    : 'Какой ключ используется для краткого вывода команды status',
    variants    : [ '-s',
                    '--short',
                    '-a',
                    '--add',
                    '--track'
    ],
    type        : 'checkbox', // radio/checkbox
    rightAnswers: [ '-s', '--short' ],
    explanations:'' +
    '<p>$ git status -s<br />' +
    ' M README<br />' +
    'MM Rakefile<br />' +
    'A  lib/git.rb<br />' +
    'M  lib/simplegit.rb<br />' +
    '?? LICENSE.txt</p>' +
    '<p>Новые, неотслеживаемые файлы помечены ?? слева от них, файлы добавленные в отслеживаемые помечены A, отредактированные файлы помечены M и так далее. В выводе содержится два столбца - в левом указывается статус файла, а в правой модифицирован ли он после этого. К примеру в нашем выводе, файл README модифицирован в рабочей директории и не проиндексирован, файл lib/simplegit.rb модифицирован и проиндексирован. Файл Rakefile модифицирован, проиндексирован и ещё раз модифицирован, таким образом на данный момент у него есть изменения которые попадут в коммит и те которые не попадут.</p>'
  },

  {
    question    : 'Какой ключ команды diff используется, чтобы посмотреть, что было проиндексировано и что войдёт в следующий коммит',
    variants    : [ '--staged',
                    '--short',
                    '-a',
                    '--add',
                    '--track'
    ],
    type        : 'radio', // radio/checkbox
    rightAnswers: [ '--staged' ],
    explanations:'' +
    '<p>Важно отметить, что git diff сама по себе не показывает все изменения сделанные с последнего коммита — только те, что ещё не проиндексированы. Такое поведение может сбивать с толку, так как если вы проиндексируете все свои изменения, то git diff ничего не вернёт.</p>'
  },

  {
    question    : 'С помощью какой команды можно просмотреть удалённые репозитории',
    variants    : [ '$ git remote',
                    '$ git status',
                    '$ git init',
                    '$ git clone [url]'
    ],
    type        : 'radio', // radio/checkbox
    rightAnswers: [ '$ git remote' ],
    explanations:'<p>Чтобы просмотреть адреса для чтения и записи, привязанные к репозиторию, нужно использовать ключ -v</p>'
  },

  {
    question    : 'Как добавить удалённый репозиторий',
    variants    : [ '$ git remote add [shortname] [url]',
                    '$ git remote [shortname] add [url]',
                    '$ git remote add [shortname]',
                    '$ git add [shortname] [url]'
    ],
    type        : 'radio', // radio/checkbox
    rightAnswers: [ '$ git remote add [shortname] [url]' ],
    explanations:''
  },

  {
    question    : 'Как получить изменения из удалённого репозитория',
    variants    : [ '$ git fetch [remote-name]',
                    '$ git pull [remote-name]',
                    '$ git fetch',
                    '$ git [remote-name] fetch'
    ],
    type        : 'radio', // radio/checkbox
    rightAnswers: [ '$ git fetch [remote-name]' ],
    explanations:'<p>Команда git fetch загрузит с сервера все изменения, которых у вас еще нет, но пока не будет изменять вашу рабочую директорию. Эта команда просто получает данные для вас и позволяет вам самостоятельно сделать слияние. Тем не менее, существует команда под названием git pull, которая является по существу командой git fetch, непосредственно за которой следует команда git merge, в большинстве случаев. Если у вас есть отслеживаемая ветка как показано в предыдущем разделе, либо она явно установлена или она содержится вследствие создания вами командами clone или checkout, git pull увидит, что сервер и ветка вашей текущей ветки отслеживается, извлечет с сервера и затем попытается объединить в удаленную ветку.</p>' +
    '<p>Обычно лучше просто явно использовать команды fetch и merge, поскольку магия git pull может часто сбивать с толку.</p>'
  },

  {
    question    : 'Как создать новую ветку',
    variants    : [ '$ git branch [branch-name]',
                    '$ git [branch-name] branch',
                    '$ git branch',
                    '$ git add branch [branch-name]'
    ],
    type        : 'radio', // radio/checkbox
    rightAnswers: [ '$ git branch [branch-name]' ],
    explanations:'<p>В результате созданрия новой ветки создается новый указатель на тот же самый коммит, в котором вы находитесь.</p>'+
    '<p>При запуске без параметров, вы получите простой список имеющихся у вас веток.</p>'+
    '<p>Чтобы посмотреть последний коммит на каждой из веток, выполните команду git branch -v.</p>'
  },

  {
    question    : 'С помощью какой команды можно переключиться на существующую ветку',
    variants    : [ '$ git checkout [branch-name]',
                    '$ git branch [branch-name]',
                    '$ git branch',
                    '$ git checkout add [branch-name]'
    ],
    type        : 'radio', // radio/checkbox
    rightAnswers: [ '$ git checkout [branch-name]' ],
    explanations:'<p>В результате указатель HEAD переместится на ветку [branch-name].</p>'+
    '<p>Чтобы создать ветку и сразу переключиться на нее, можно выполнить команду git checkout -b [branch-name].</p>'+
    '<p>Удалить ветку можно командой git branch -d [branch-name].</p>'
  },

  {
    question    : 'С помощью какой команды можно осуществить слияние веток',
    variants    : [ '$ git merge',
                    '$ git add',
                    '$ git track',
                    '$ git init'
    ],
    type        : 'radio', // radio/checkbox
    rightAnswers: [ '$ git merge' ],
    explanations:'<p>В результате указатель HEAD переместится на ветку [branch-name].</p>'+
    '<p>Чтобы создать ветку и сразу переключиться на нее, можно выполнить команду git checkout -b [branch-name].</p>'+
    '<p>Удалить ветку можно командой git branch -d [branch-name].</p>'
  },

  {
    question    : 'Как оставить в списке веток только те, которые были слиты в активную ветку',
    variants    : [ '$ git branch --merged',
                    '$ git branch --merge',
                    '$ git branch -merged',
                    '$ git branch -m'
    ],
    type        : 'radio', // radio/checkbox
    rightAnswers: [ '$ git branch --merged' ],
    explanations:'<p>' +
    '$ git branch --merged<br />' +
    '    iss53<br />' +
    '  * master</p>' +
    '<p>Те ветки из этого списка, перед которыми нет символа *, можно удалять командой git branch -d</p>'
  },

  {
    question    : 'Чтобы создать собственную ветку [branch-name] на основе удалённой ветки [branch-name]',
    variants    : [ '$ git checkout -b [branch-name] [server-name]/[branch-name]',
                    '$ git checkout --track [server-name]/[branch-name]',
                    '$ git checkout -b [local-branch-name] [server-name]/[branch-name]',
                    '$ git checkout [local-branch-name] -b [server-name]/[branch-name]',
                    '$ git checkout --track [branch-name]/[server-name]'
    ],
    type        : 'checkbox', // radio/checkbox
    rightAnswers: [ '$ git checkout -b [branch-name] [server-name]/[branch-name]', '$ git checkout --track [server-name]/[branch-name]', '$ git checkout -b [local-branch-name] [server-name]/[branch-name]' ],
    explanations:''
  },

  {
    question    : 'Чтобы посмотреть какие отслеживаемые ветки установлены',
    variants    : [ '$ git branch -vv',
                    '$ git branch -vw',
                    '$ git branches -vv',
                    '$ git branch -b'
    ],
    type        : 'radio', // radio/checkbox
    rightAnswers: [ '$ git branch -vv' ],
    explanations:'<p>$ git branch -vv<br />' +
    '  iss53     7e424c3 [origin/iss53: ahead 2] forgot the brackets<br />' +
    '  master    1ae2a45 [origin/master] deploying index fix<br />' +
    '* serverfix f8674d9 [teamone/server-fix-good: ahead 3, behind 1] this should do it<br />' +
    '  testing   5ea463a trying something new</p>' +
    'Итак, здесь мы можем видеть, что наша iss53-ветка отслеживает origin/iss53 и она опережает на два изменения, означающее, что мы имеем два локальных коммита, которые не отправлены на сервер. Мы может также увидеть, что наша master-ветка отслеживает origin/master и она в актуальном состоянии. Далее мы можем видеть, что наша serverfix-ветка отслеживает server-fix-good-ветку на нашем teamone-сервере и опережает на три коммита и отстает на один, означающее, что есть один коммит на сервере, который мы еще не слили и три локальных коммита, которые вы еще не отправили. В конце мы видим, что наша testing-ветка не отслеживает удаленную ветку.</p>' +
    '<p>Важно отметить, что эти цифры — только с каждого сервера, которые последний раз были извлечены. Эта команда не обращается к серверам, она говорит вам о том, что в кэше есть локальная информация с серверов.</p>'
  },

  {
    question    : 'Как удалить ветку на удалённом сервере',
    variants    : [ '$ git push [server-name] --delete [branch-name]',
                    '$ git push --delete [branch-name]',
                    '$ git [server-name] --delete [branch-name]',
                    '$ git push [server-name] -d [branch-name]'
    ],
    type        : 'radio', // radio/checkbox
    rightAnswers: [ '$ git push [server-name] --delete [branch-name]' ],
    explanations:''
  }
];