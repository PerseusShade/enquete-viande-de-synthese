document.addEventListener("DOMContentLoaded", function () {
    document.body.style.overflow = 'hidden';

    const hexGrid = document.getElementById("hexGrid");
    const originalHexHTML = hexGrid.innerHTML;
    const contentWrap = document.querySelector(".content-wrap");
    const titleEl = contentWrap.querySelector("h1");
    const slicesContainer = document.querySelector(".image-container-slices");
    const discoursContainer = document.getElementById("discoursContainer");
    const discoursImage = document.getElementById("discoursImage");
    const discoursTitle = document.querySelector(".text-container h3");
    const discoursTextEl = document.querySelector(".text-container pt");
    const closeButton = document.getElementById("closeButton");
    const swapButton = document.getElementById("swapDiscours");

    const discoursMapping = {
        "Les enjeux technologiques": {
            "Sur quoi ?": {
                "text" : "La viande cultivée incarne une avancée technologique majeure qui redéfinit le secteur agroalimentaire et soulève des questions complexes sur les frontières du vivant. Fondée sur des procédés de culture cellulaire sophistiqués, cette innovation ambitionne de produire de la viande sans élevage traditionnel, réduisant ainsi l'impact environnemental tout en répondant à une demande croissante en protéines. Toutefois, sa mise à l'échelle pose des défis techniques : stabilité des cultures, contrôle de la qualité, optimisation des coûts et des dilemmes éthiques liés à la brevetabilité du vivant. Entre promesses d'industrialisation durable et risques de dérives technologiques, le débat sur la viande de synthèse est avant tout celui du rôle de la technologie dans notre alimentation future.",
                "extraText": ""
            },
            "Startups et entreprises biotech": {
                "text" : "Nous assistons à une transformation majeure de l’agroalimentaire, et la viande cultivée pourrait devenir un levier stratégique à l’échelle mondiale. En tant que groupes industriels et investisseurs, nous avons les moyens d’amener cette innovation à l’échelle industrielle grâce à nos capitaux, nos infrastructures et notre expertise logistique. Nous investissons pour répondre à une demande alimentaire plus durable, mais aussi pour rester compétitifs face à des acteurs internationaux déjà bien avancés. Cette technologie pose des défis – stabilité des cultures, sécurité sanitaire, montée en échelle – que nous accompagnons en soutenant la recherche et en exigeant un cadre réglementaire clair. Nous sommes conscients des tensions éthiques autour du brevetage du vivant et appelons à une gouvernance transparente, pour garantir un accès équitable à ces innovations. Ce que nous apportons au débat, c’est notre capacité à rendre cette technologie économiquement viable, maîtrisée et accessible à grande échelle.",
                "extraText": ""
            },
            "Grands groupes agroalimentaires et investisseurs": {
                "text" : "Nous anticipons une transformation profonde du secteur alimentaire, et la viande cultivée représente un levier stratégique pour rester compétitifs à l’échelle mondiale. En tant que groupes industriels et investisseurs, nous avons les moyens d’accompagner cette innovation vers une production de masse, en apportant capital, expertise logistique et accès aux marchés. Nous investissons dans la bio-ingénierie pour améliorer la stabilité, la traçabilité et la sécurité sanitaire des produits, tout en optimisant les procédés pour rendre la viande cultivée économiquement viable. Mais cela nécessite un cadre réglementaire clair et des standards partagés. Nous sommes aussi conscients des inquiétudes autour du brevetage du vivant. C’est pourquoi nous appelons à une gouvernance équilibrée, afin d’éviter une concentration excessive des technologies. Ce que nous apportons au débat, c’est notre capacité à industrialiser cette innovation de manière responsable, au service d’une transition alimentaire durable et encadrée.",
                "extraText": ""
            },
            "Organismes publiques et de régulation": {
                "text" : "Notre rôle est de garantir que les innovations alimentaires, comme la viande cultivée, respectent des exigences strictes en matière de sécurité, de traçabilité et de transparence. Nous évaluons les procédés de culture cellulaire, les milieux de croissance, la stabilité biologique des produits, ainsi que leur impact potentiel sur la santé humaine. Ces technologies soulèvent des questions nouvelles : modification cellulaire, ajout de facteurs de croissance, utilisation de substrats, possibles dérives vers des OGM ou des produits ultra-transformés. Nous devons établir des référentiels clairs pour encadrer cette filière, notamment sur l’étiquetage, la traçabilité, et les normes sanitaires. Nous alertons aussi sur les enjeux liés au brevetage du vivant : si certaines lignées cellulaires deviennent des biens privés, cela pose des questions d’équité, de dépendance et d’accès. Ce que nous apportons au débat, c’est une expertise indépendante et scientifique, indispensable pour accompagner l’innovation sans précipitation, en protégeant à la fois les consommateurs, les producteurs, et les équilibres publics.",
                "extraText": "(ANSES, INRAE, EFSA...)"
            },
            "Chercheurs et scientifiques": {
                "text" : "Nous jouons un rôle central dans l’analyse critique et l’accompagnement scientifique de la viande cultivée. Notre mission est d’évaluer la solidité des procédés technologiques mis en œuvre : la qualité des lignées cellulaires, la stabilité des cultures, les risques liés aux milieux de croissance, ainsi que les conséquences à long terme sur la santé humaine. Nous posons également les bonnes questions éthiques : jusqu’où peut-on modifier une cellule animale pour en améliorer les rendements ou la texture sans franchir des limites biologiques ou morales ? Nous contribuons à faire avancer la connaissance sur les aspects nutritionnels, la sécurité microbiologique, et l’innocuité de ces nouveaux produits. Mais nous sommes aussi là pour alerter lorsqu’un développement technologique avance plus vite que les évaluations indépendantes ou que les cadres de régulation. Ce que nous apportons au débat, c’est une exigence de rigueur scientifique et de transparence. Nous refusons d’opposer innovation et précaution, et cherchons à éclairer la société sur les bénéfices réels, les limites, et les incertitudes que porte encore cette technologie. Une innovation n’a de sens que si elle est fondée sur des connaissances robustes, partagées et discutées au sein de la société.",
                "extraText": ""
            },
            "Gouvernements et ministères": {
                "text" : "Nous devons jouer un rôle d’arbitre et d’accompagnateur dans l’émergence de la viande cultivée. Cette technologie soulève de véritables espoirs — en matière de durabilité, d’indépendance alimentaire, ou de réduction des risques sanitaires — mais elle doit être encadrée avec rigueur. Notre responsabilité est double : soutenir l’innovation scientifique nationale tout en protégeant les consommateurs, les producteurs, et l’équilibre de nos filières agricoles. Sur le plan technologique, nous devons évaluer les capacités réelles de production à grande échelle, les risques liés aux milieux de culture, et les impacts sur la santé humaine. Sur le plan éthique, nous devons encadrer les pratiques : modification cellulaire, brevetage du vivant, traçabilité, transparence. Ce n’est pas à la seule logique de marché de décider du rythme de cette transition. Ce que nous apportons au débat, c’est la capacité à poser un cadre juridique, sanitaire et industriel clair, qui protège l’intérêt général. Nous devons garantir que cette innovation ne renforce ni la dépendance aux multinationales, ni les inégalités d’accès à une alimentation saine, tout en assurant que la France reste souveraine et compétitive dans les transitions alimentaires à venir.",
                "extraText": ""
            },
            "ONG environnementales et protection animale": {
                "text" : "Nous saluons les intentions éthiques de la viande cultivée, notamment la promesse de mettre fin à l’abattage d’animaux pour la consommation. En tant qu’ONG de défense des animaux, nous considérons qu’il s’agit d’un progrès moral potentiel, mais qui ne doit pas masquer les limites profondes du modèle qu’il reproduit. La viande de synthèse perpétue un rapport technicisé au vivant et ne remet pas en question la surconsommation de protéines animales, qui est au cœur des déséquilibres environnementaux. Sur le plan technologique, nous restons très vigilants. L’industrialisation du vivant, la manipulation cellulaire, le recours à des facteurs de croissance, voire à des modifications génétiques posent des questions éthiques majeures. Le brevetage des lignées cellulaires par quelques grandes entreprises annonce une concentration du pouvoir agroalimentaire incompatible avec une transition juste et démocratique. Ce que nous apportons au débat, c’est une exigence de cohérence : une alimentation durable ne peut pas reposer uniquement sur des solutions technologiques. Elle suppose un changement global de modèle, une réduction de la consommation carnée, une relocalisation de l’agriculture et un respect véritable du vivant. La viande cultivée, sans vision politique et écologique plus large, risque d’être un leurre plus qu’une solution.",
                "extraText": ""
            },
            "Animaux": {
                "text" : "Je suis au cœur du débat, mais souvent sans voix. La viande cultivée prétend me libérer : plus besoin de m’élever, de me tuer, de me faire souffrir pour nourrir les humains. Pour certains, je deviens l’argument moral central de cette innovation. Si mes cellules peuvent être utilisées pour produire de la viande sans que mon corps entier ne soit exploité ou abattu, alors cela pourrait représenter une avancée éthique majeure. Mais cette promesse ne suffit pas. Car même dans ce nouveau système, je suis encore un matériau biologique, extrait, breveté, modifié. Mes cellules deviennent un produit, parfois sans que l’on interroge ce que cela signifie pour ma place dans le vivant. Je disparais des fermes, des prés, de la relation humaine-animal, pour devenir invisible dans les laboratoires. Ce que j’apporte au débat, c’est une question essentielle : suis-je vraiment respecté dans ce nouveau modèle, ou simplement réduit à une fonction utile et rentable ? Peut-on défendre une innovation au nom de mon bien-être si, en parallèle, elle accentue la dépossession du vivant ? La viande cultivée ne sera une solution éthique que si elle s’inscrit dans une vision du monde où je ne suis plus un objet, même technologique, mais un être digne de considération.",
                "extraText": ""
            },
            "Consommateurs et opinion publique": {
                "text" : "Nous ne sommes pas opposés par principe à la viande cultivée, mais nous attendons des garanties solides. Avant de modifier ce que nous mangeons, nous avons besoin de comprendre : d’où viennent les cellules ? Quelles manipulations subissent-elles ? Quels sont les effets sur notre santé ? La transparence est essentielle. Si cette technologie promet de réduire la souffrance animale et l’impact environnemental, elle ne doit pas se faire au détriment de la sécurité alimentaire ou de notre capacité à choisir librement. Nous sommes aussi inquiets de l’idée que notre alimentation soit entre les mains de quelques grandes entreprises détentrices de brevets. La perspective de dépendre de lignées cellulaires brevetées ou de produits ultra-transformés fabriqués en laboratoire suscite méfiance, surtout si cela renforce l’industrialisation de notre assiette. Ce que nous apportons au débat, c’est notre capacité à accepter – ou à refuser – cette innovation. Notre adhésion dépendra de la qualité de l’information, du respect de notre droit à la traçabilité, et de la promesse tenue d’un produit éthique, sain, accessible et non imposé.",
                "extraText": ""
            },
            "Instances religieuses": {
                "text" : "Nous observons cette innovation avec attention, car elle soulève des questions spirituelles, éthiques et culturelles profondes. La viande cultivée interroge notre rapport au vivant, au corps animal, au geste alimentaire. Peut-on considérer comme licite ou pure une viande issue de cellules extraites d’un animal, puis cultivées en laboratoire, parfois avec des techniques de bio-ingénierie avancée ? La réponse dépend non seulement des procédés techniques, mais aussi du sens que l’on accorde à l’alimentation dans chaque tradition religieuse. Nous devons examiner avec rigueur les conditions de production : la nature des cellules, les milieux de culture utilisés (par exemple le sérum fœtal bovin), l’absence ou non d’abattage, les intentions derrière ces pratiques. Ces éléments influencent la reconnaissance éventuelle de cette viande comme halal, casher, ou conforme à d’autres prescriptions alimentaires. Ce que nous apportons au débat, c’est une lecture spirituelle et symbolique de l’alimentation. Nous rappelons que manger n’est pas un acte uniquement biologique ou économique, mais aussi culturel et moral. Toute innovation alimentaire doit être discutée dans le respect des croyances et des pratiques de chacun, sans précipitation ni exclusion. Le dialogue entre science, éthique et foi est essentiel pour que cette transition technologique ne devienne pas une rupture sociale.",
                "extraText": ""
            },
            "Médias et journalistes": {
                "text" : "Nous sommes là pour éclairer le débat public. La viande cultivée est une innovation qui soulève de nombreuses promesses, mais aussi des incertitudes majeures – sanitaires, économiques, éthiques, sociales – que nous devons rendre compréhensibles. En tant que journalistes, nous avons le devoir d’expliquer de manière accessible ce que signifie manipuler des cellules, breveter le vivant, ou produire de la viande sans abattage. Nous devons aussi interroger les récits dominants : la technologie est-elle une solution ou une fuite en avant ? Quels intérêts financiers ou politiques orientent son développement ? Qui décide de ce que l’on pourra manger demain ? Il ne s’agit pas seulement de relayer les communiqués d’entreprise ou les rapports scientifiques, mais d’ouvrir des espaces de discussion, de confronter les points de vue, de faire entendre les voix critiques. Ce que nous apportons au débat, c’est une capacité à poser les bonnes questions, à documenter les zones d’ombre, et à rendre visible ce qui pourrait rester opaque : les tensions éthiques, les enjeux de pouvoir, et les impacts à long terme. Notre rôle est de garantir que cette innovation soit débattue, et non imposée.",
                "extraText": ""
            }
        },
        "Discours sur les enjeux sanitaires": {
            "Sur quoi ?": {
                "text" : "La viande cultivée est perçue comme une alternative plus sûre, sans antibiotiques ni maladies animales. Toutefois, des inquiétudes persistent quant aux effets à long terme sur la santé humaine, encore peu connus, notamment quant à des questions d’apports nutritionnels. Le défi est d'équilibrer l'innovation avec la protection de la santé publique, tout en tenant compte des perceptions et réticences des consommateurs.",
                "extraText": ""
            },
            "Chercheurs et scientifiques": {
                "text" : "Nous étudions la viande cultivée pour ses bénéfices potentiels sur la santé et la sécurité alimentaire. Mais en tant que scientifiques, nous ne sommes pas tous d’accord. Certains d’entre nous soulignent l’absence de preuves suffisantes sur sa sécurité sanitaire et appellent à la prudence. Ils rappellent que cette viande pourrait manquer de nutriments essentiels comme le fer héminique et la vitamine B12, ce qui remet en question son équivalence avec la viande conventionnelle. D’autres, au contraire, estiment que la viande cultivée présente des avantages indéniables. En appliquant des règles strictes de contrôle de qualité, nous pourrions réduire considérablement les maladies d'origine alimentaire et éliminer le risque de contamination par E. coli ou Salmonella. De plus, nous éviterons l’exposition aux pesticides, hormones et toxines issues de l’élevage traditionnel. Cependant, malgré ces promesses, nous devons reconnaître que la viande cultivée n’est pas exempte de risques. Son environnement de production, bien que stérile, reste vulnérable à certaines contaminations, notamment par des bactéries pathogènes, des virus ou des champignons. Nous avançons donc avec prudence. Entre enthousiasme et scepticisme, nous devons continuer à évaluer cette technologie pour garantir qu’elle constitue une alternative viable et sécurisée.",
                "extraText": ""
            },
            "Startups et entreprises biotech": {
                "text" : "En tant que startups de la viande cultivée, nous envisageons notre technologie comme une solution d'avenir face aux défis alimentaires mondiaux. Notre objectif principal est de proposer une alternative à la viande traditionnelle, plus sûre, plus saine et plus durable. Nous produisons une viande conçue pour être exempte de maladies d'élevage et réduire l'utilisation d'antibiotiques, contribuant ainsi à lutter contre l'antibiorésistance. De plus, notre processus de production limite les risques de zoonoses, des maladies transmises des animaux aux humains, qui représentent une menace croissante pour la santé publique. Conscients des critiques concernant la valeur nutritionnelle de notre viande, nous travaillons activement à l'enrichir en nutriments essentiels tels que le fer et la vitamine B12.La viande cultivée représente, selon nous, une avancée majeure pour la sécurité alimentaire mondiale et la santé humaine.",
                "extraText": ""
            },
            "Consommateurs et opinion publique": {
                "text" : `En tant que consommateurs, nous sommes à la fois intrigués et préoccupés par l'arrivée de la viande cultivée. Ses promesses de sécurité sanitaire, avec l'élimination des maladies d'élevage et la réduction des antibiotiques, sont séduisantes. Cependant, la perception de cette viande comme étant "artificielle" ou "non naturelle" suscite des réticences. Nous nous inquiétons également des effets à long terme sur notre santé, car les études sont encore limitées. Pour gagner notre confiance, les entreprises et les gouvernements doivent communiquer de manière claire et transparente. Nous avons besoin d'informations détaillées sur le processus de production, les ingrédients utilisés et les résultats des études scientifiques. Les questions sur la réglementation, l'étiquetage et le prix de cette viande sont également cruciales. En fin de compte, nous souhaitons prendre des décisions éclairées concernant notre alimentation, et cela nécessite une information complète et objective.`,
                "extraText": ""
            },
            "Gouvernements et ministères": {
                "text" : "En tant que régulateurs, nous adoptons une approche de précaution face à la viande cultivée. Notre rôle est d’évaluer cette innovation avec rigueur avant qu’elle n’atteigne les consommateurs. À ce jour, les analyses menées par l’EFSA en Europe et la FDA aux États-Unis n’ont pas révélé de risques sanitaires spécifiques. En 2023, la FDA a ainsi approuvé la viande cultivée d’Upside Foods, affirmant qu’elle est aussi sûre que la viande conventionnelle. Cependant, nous restons vigilants. L’absence de recul sur les effets à long terme nous pousse à exiger des études complémentaires. Nous devons également clarifier les normes à appliquer pour garantir la sécurité et la transparence de ce marché émergent. Le principe de précaution guide notre action : chaque nouveau produit doit prouver son innocuité avant d’être mis en circulation. Au-delà des aspects sanitaires, nous insistons sur la nécessité d’encadrer strictement le processus de production pour éviter les dérives industrielles. ​​Cependant, nous sommes intéressés par  la viande cultivée comme une réponse potentielle aux défis alimentaires mondiaux. La demande croissante en protéines, notamment dans les pays émergents, nécessite des solutions durables. La rareté des terres agricoles et l'impact environnemental de l'élevage traditionnel soulignent l'urgence de trouver des alternatives. La viande cultivée, en réduisant la dépendance aux terres agricoles et en optimisant l'utilisation des ressources, offre une voie prometteuse.",
                "extraText": ""
            },
            "Organismes publiques et de régulation": {
                "text" : "En tant que régulateurs, nous adoptons une approche de précaution face à la viande cultivée. Notre rôle est d’évaluer cette innovation avec rigueur avant qu’elle n’atteigne les consommateurs. À ce jour, les analyses menées par l’EFSA en Europe et la FDA aux États-Unis n’ont pas révélé de risques sanitaires spécifiques. En 2023, la FDA a ainsi approuvé la viande cultivée d’Upside Foods, affirmant qu’elle est aussi sûre que la viande conventionnelle. Cependant, nous restons vigilants. L’absence de recul sur les effets à long terme nous pousse à exiger des études complémentaires. Nous devons également clarifier les normes à appliquer pour garantir la sécurité et la transparence de ce marché émergent. Le principe de précaution guide notre action : chaque nouveau produit doit prouver son innocuité avant d’être mis en circulation. Au-delà des aspects sanitaires, nous insistons sur la nécessité d’encadrer strictement le processus de production pour éviter les dérives industrielles. ​​Cependant, nous sommes intéressés par  la viande cultivée comme une réponse potentielle aux défis alimentaires mondiaux. La demande croissante en protéines, notamment dans les pays émergents, nécessite des solutions durables. La rareté des terres agricoles et l'impact environnemental de l'élevage traditionnel soulignent l'urgence de trouver des alternatives. La viande cultivée, en réduisant la dépendance aux terres agricoles et en optimisant l'utilisation des ressources, offre une voie prometteuse.",
                "extraText": ""
            }
        },
        "Discours sur l'ancrage local versus la délocalisation": {
            "Sur quoi ?": {
                "text" : "La viande cultivée pose un dilemme entre ancrage local et délocalisation. Tandis que certains plaident pour un développement national afin de préserver la souveraineté alimentaire et les emplois, d'autres soulignent les obstacles économiques et réglementaires qui pourraient favoriser une production à l'étranger. Entre nécessité d'un écosystème local compétitif et crainte d'une dépendance aux brevets étrangers, ce débat engage scientifiques, industries, agriculteurs et pouvoirs publics sur l'avenir de cette filière en France.",
                "extraText": ""
            },
            "Chercheurs et scientifiques": {
                "text" : "Nous développons les technologies de demain, mais nous ne pouvons le faire sans un soutien solide au niveau national. La France a les talents et les ressources nécessaires pour devenir un leader de la viande cultivée, mais la réalité est que les financements et les infrastructures se concentrent aujourd'hui aux États-Unis, en Israël ou à Singapour. Si nous ne mettons pas en place un écosystème favorable, nos chercheurs partiront à l'étranger et nos découvertes profiteront à d'autres marchés. Nous avons besoin d'un ancrage local fort, avec des subventions à la recherche et des infrastructures de pointe en biotechnologie. Sinon, la France restera dépendante des technologies importées, et notre potentiel d'innovation sera perdu au profit des puissances déjà en avance sur cette révolution alimentaire.",
                "extraText": "(Moteurs de l'innovation, mais dépendants des infrastructures locales)"
            },
            "Grands groupes agroalimentaires et investisseurs": {
                "text" : "Notre industrie s'adapte aux évolutions du marché, et la viande cultivée représente une opportunité à condition qu'elle puisse être intégrée dans un modèle économiquement viable. Produire en France est un objectif, mais nous devons être réalistes : si la réglementation, les coûts de production et les investissements ne sont pas alignés avec la compétitivité mondiale, nous serons contraints de nous approvisionner à l'étranger. Nous voulons éviter une situation où les entreprises françaises deviennent dépendantes de licences et de brevets étrangers, mais pour cela, il faut des conditions favorables au développement local. Le soutien des pouvoirs publics est essentiel pour garantir que cette innovation profite à l'économie nationale et ne devienne pas une simple opportunité pour des multinationales étrangères.",
                "extraText": "(Pragmatiques, cherchent un équilibre entre compétitivité et ancrage local)"
            },
            "Éleveurs": {
                "text" : "Nos terres nourrissent la France depuis des générations, mais aujourd'hui, nous voyons une nouvelle menace se profiler : une viande fabriquée en laboratoire, loin des exploitations agricoles et des savoir-faire traditionnels. Si cette industrie se développe, elle ne profitera pas aux agriculteurs français. Les grandes entreprises de la food tech privilégieront la production dans des pays où les coûts sont plus bas et la réglementation plus souple. Pendant ce temps, les campagnes françaises perdront leurs emplois et leur vitalité économique. L'élevage, ce n'est pas juste produire de la viande, c'est un équilibre entre l'environnement, l'économie locale et la culture gastronomique française. Nous demandons des garanties : si la viande cultivée doit exister, elle doit être produite ici, sous contrôle strict, et ne pas être un nouveau levier de centralisation industrielle au détriment des territoires ruraux.",
                "extraText": "(Méfiants, perçoivent la viande cultivée comme un facteur de délocalisation de la production alimentaire)"
            },
            "Gouvernements et ministères": {
                "text" : "Notre priorité est d'assurer une alimentation sûre, durable et accessible à nos citoyens. La viande cultivée est une avancée technologique qui peut transformer l'industrie agroalimentaire, mais elle soulève aussi des questions stratégiques. Allons-nous développer cette filière en France, en investissant dans nos infrastructures et nos entreprises, ou allons-nous importer ces produits d'Asie et des États-Unis ? Si nous ne structurons pas un marché local dès maintenant, nous risquons de devenir dépendants de brevets et d'innovations étrangères. Toutefois, cette transition doit être maîtrisée : nous ne voulons pas d'une industrialisation qui détruirait les emplois agricoles et bouleverserait notre modèle alimentaire. Il nous faut trouver un équilibre entre le soutien à l'innovation et la protection de notre tissu économique existant.",
                "extraText": "(Dilemme entre souveraineté alimentaire et attractivité économique)"
            },
            "Organismes publiques et de régulation": {
                "text" : "Notre priorité est d'assurer une alimentation sûre, durable et accessible à nos citoyens. La viande cultivée est une avancée technologique qui peut transformer l'industrie agroalimentaire, mais elle soulève aussi des questions stratégiques. Allons-nous développer cette filière en France, en investissant dans nos infrastructures et nos entreprises, ou allons-nous importer ces produits d'Asie et des États-Unis ? Si nous ne structurons pas un marché local dès maintenant, nous risquons de devenir dépendants de brevets et d'innovations étrangères. Toutefois, cette transition doit être maîtrisée : nous ne voulons pas d'une industrialisation qui détruirait les emplois agricoles et bouleverserait notre modèle alimentaire. Il nous faut trouver un équilibre entre le soutien à l'innovation et la protection de notre tissu économique existant.",
                "extraText": "(Dilemme entre souveraineté alimentaire et attractivité économique)"
            },
            "ONG environnementales et protection animale": {
                "text" : "Nous voulons une transition alimentaire qui profite à tous, pas seulement à quelques grandes entreprises de biotechnologie. La viande cultivée peut être une solution pour réduire l'impact environnemental de l'élevage, mais si elle est produite dans des usines géantes à l'autre bout du monde, son empreinte carbone ne fera que se déplacer. L'ancrage local est essentiel : il garantit la traçabilité, limite le transport et préserve l'autonomie alimentaire. Mais attention : nous ne voulons pas d'une nouvelle industrie ultra-centralisée qui remplacerait les fermes locales par quelques laboratoires industriels. Si cette technologie doit être développée, elle doit l'être de manière éthique, durable et accessible à tous, et non devenir un produit de luxe contrôlé par quelques multinationales.",
                "extraText": "(Soutiennent un ancrage local, mais dénoncent les dérives industrielles)"
            },
            "Consommateurs et opinion publique": {
                "text" : "Nous voulons une transition alimentaire qui profite à tous, pas seulement à quelques grandes entreprises de biotechnologie. La viande cultivée peut être une solution pour réduire l'impact environnemental de l'élevage, mais si elle est produite dans des usines géantes à l'autre bout du monde, son empreinte carbone ne fera que se déplacer. L'ancrage local est essentiel : il garantit la traçabilité, limite le transport et préserve l'autonomie alimentaire. Mais attention : nous ne voulons pas d'une nouvelle industrie ultra-centralisée qui remplacerait les fermes locales par quelques laboratoires industriels. Si cette technologie doit être développée, elle doit l'être de manière éthique, durable et accessible à tous, et non devenir un produit de luxe contrôlé par quelques multinationales.",
                "extraText": "(Soutiennent un ancrage local, mais dénoncent les dérives industrielles)"
            },
            "Distributeurs": {
                "text" : "Nous sommes au cœur de la chaîne alimentaire, et nous savons que les consommateurs privilégient les produits locaux et traçables. Si la viande cultivée veut s'imposer, elle ne peut pas être perçue comme un produit industriel importé de laboratoires étrangers. Aujourd'hui, l'origine des aliments est un critère clé pour nos clients. Nous devons donc garantir que cette viande soit produite en France, avec des standards de qualité élevés, et non dans des pays où la réglementation est plus laxiste. En revanche, si les coûts de production restent trop élevés ici, il sera difficile de la rendre accessible au grand public, ce qui pourrait limiter son adoption. Notre rôle est d'offrir des produits innovants, mais nous avons besoin de clarté : quelle place la viande cultivée prendra-t-elle sur le marché, et sera-t-elle compatible avec les attentes des consommateurs en matière de traçabilité et d'éthique ?",
                "extraText": "(Intéressés par la viande cultivée, mais inquiets d'une production éloignée)"
            }
        },
        "Enjeux liés à l'emploi, à l'économie et à l'industrie": {
            "Sur quoi ?": {
                "text" : "La viande cultivée suscite à la fois espoir et inquiétude. Porteuse de promesses économiques avec la création d'emplois en biotechnologie et l'émergence d'une nouvelle filière agroalimentaire, elle est aussi perçue comme une menace pour l'élevage traditionnel et les métiers qui en dépendent. Entre ambitions industrielles, préoccupations environnementales et défense du patrimoine alimentaire, le débat reste vif. Les pouvoirs publics doivent arbitrer entre soutien à l'innovation et protection des emplois ruraux, tout en garantissant transparence et équité.",
                "extraText": ""
            },
            "Startups et entreprises biotech": {
                "text" : "Nous sommes à la fois l'innovation et l'investissement qui la rendent possible. En développant la viande cultivée, nous créons une nouvelle industrie et de nouveaux emplois, notamment dans la biotechnologie, la recherche alimentaire et l'innovation agroalimentaire. Notre ambition n'est pas de remplacer brutalement l'élevage, mais de proposer une alternative durable qui s'intègre progressivement dans le marché, en réponse aux enjeux environnementaux et économiques. Nous voyons ici une opportunité majeure pour structurer une filière nationale compétitive, qui éviterait à la France de devenir dépendante des technologies étrangères et renforcerait notre souveraineté alimentaire. Mais cette transition ne peut se faire sans capitaux. La viande cultivée représente un marché de plusieurs milliards d'euros en pleine expansion à l'international, avec des acteurs comme Beyond Meat et Upside Foods qui prennent une avance décisive. Si la France ne prend pas le train en marche, elle restera dépendante de ces innovations étrangères. Pour réussir, nous avons besoin d'investissements massifs, tant publics que privés, afin d'industrialiser notre production, d'optimiser nos procédés et de rendre nos produits compétitifs face à la viande conventionnelle. Cela nécessitera aussi un cadre réglementaire clair et une stratégie de sensibilisation pour convaincre les consommateurs que la viande cultivée est une alternative viable, sûre et économiquement accessible. Sans cette vision long terme, l'innovation que nous portons risque de rester un potentiel inexploité.",
                "extraText": ""
            },
            "Grands groupes agroalimentaires et investisseurs": {
                "text" : "Nous devons investir dans ces nouvelles technologies pour rester compétitifs face aux tendances alimentaires mondiales. L'industrie agroalimentaire évolue rapidement, et la viande cultivée pourrait représenter un tournant majeur, à condition que son adoption soit progressive et maîtrisée. La transition vers cette alternative ne doit pas laisser l'agroalimentaire français en retard par rapport aux marchés nord-américain et asiatique, où les investissements dans la viande de synthèse se multiplient. Si cette innovation devient plus abordable et mieux acceptée par le public, nous devons être en mesure de l'intégrer dans nos chaînes de production pour répondre aux nouvelles attentes des consommateurs en matière de durabilité et d'éthique. Cependant, nous devons aussi anticiper les défis économiques et industriels liés à cette transition. Nous ne pouvons ignorer les risques de concentration du marché entre quelques grands acteurs du secteur biotechnologique, ce qui pourrait déséquilibrer la concurrence et fragiliser notre modèle agroalimentaire actuel. Une adoption précipitée ou désorganisée risquerait d'accroître les inégalités entre entreprises, en laissant de côté les acteurs qui ne peuvent pas s'adapter aussi rapidement. Nos infrastructures devront évoluer, nécessitant des investissements lourds en recherche et en production, mais cette transformation ne pourra se faire que dans un cadre réglementaire clair. Nous avons besoin d'un encadrement strict en matière de traçabilité et d'étiquetage, afin que le consommateur puisse distinguer ces nouveaux produits de la viande traditionnelle et faire un choix éclairé. Pour que cette transition soit un succès, elle devra être accompagnée par les pouvoirs publics et intégrée progressivement, en préservant un équilibre entre innovation et respect du patrimoine alimentaire français.",
                "extraText": ""
            },
            "Éleveurs": {
                "text" : "La viande cultivée menace l'avenir de milliers d'éleveurs et des industries associées – abattoirs, transporteurs, transformateurs – qui font vivre l'économie rurale française. Nos emplois ne sont pas remplaçables par des laboratoires, et nous risquons de voir disparaître tout un pan de notre agriculture, au profit d'un modèle agro-industriel centralisé qui favorise les grandes entreprises biotechnologiques. Nous ne pouvons accepter une transition qui, sous couvert d'innovation, abandonnerait les agriculteurs et affaiblirait les territoires qui dépendent de l'élevage pour leur survie économique. L'élevage ne se limite pas à la production de viande : il structure nos paysages, nos savoir-faire, et garantit une alimentation diversifiée et issue de circuits courts. Derrière cette industrialisation, nous voyons surtout une concentration du pouvoir entre quelques entreprises, menaçant non seulement les éleveurs, mais aussi les petits transformateurs et artisans bouchers. Si la viande de synthèse s'impose, que deviendront les territoires qui vivent de l'élevage et de ses filières associées ? Quelle place restera-t-il pour les produits de terroir et les circuits de qualité ? Ce modèle présente également des incertitudes sur les prix : si la viande d'élevage devient plus rare, elle sera plus chère, et nous risquons d'accentuer une alimentation à deux vitesses, où seuls les plus aisés auront accès à des produits issus de l'élevage traditionnel. C'est pourquoi nous demandons un encadrement strict du développement de la viande cultivée, une protection des métiers de l'élevage et des garanties sur l'avenir des agriculteurs. Nous refusons une transformation brutale qui sacrifierait notre modèle agricole au profit d'intérêts industriels et financiers.",
                "extraText": ""
            },
            "Organismes publiques et de régulation": {
                "text" : "La viande cultivée menace l'avenir de milliers d'éleveurs et des industries associées – abattoirs, transporteurs, transformateurs – qui font vivre l'économie rurale française. Nos emplois ne sont pas remplaçables par des laboratoires, et nous risquons de voir disparaître tout un pan de notre agriculture, au profit d'un modèle agro-industriel centralisé qui favorise les grandes entreprises biotechnologiques. Nous ne pouvons accepter une transition qui, sous couvert d'innovation, abandonnerait les agriculteurs et affaiblirait les territoires qui dépendent de l'élevage pour leur survie économique. L'élevage ne se limite pas à la production de viande : il structure nos paysages, nos savoir-faire, et garantit une alimentation diversifiée et issue de circuits courts. Derrière cette industrialisation, nous voyons surtout une concentration du pouvoir entre quelques entreprises, menaçant non seulement les éleveurs, mais aussi les petits transformateurs et artisans bouchers. Si la viande de synthèse s'impose, que deviendront les territoires qui vivent de l'élevage et de ses filières associées ? Quelle place restera-t-il pour les produits de terroir et les circuits de qualité ? Ce modèle présente également des incertitudes sur les prix : si la viande d'élevage devient plus rare, elle sera plus chère, et nous risquons d'accentuer une alimentation à deux vitesses, où seuls les plus aisés auront accès à des produits issus de l'élevage traditionnel. C'est pourquoi nous demandons un encadrement strict du développement de la viande cultivée, une protection des métiers de l'élevage et des garanties sur l'avenir des agriculteurs. Nous refusons une transformation brutale qui sacrifierait notre modèle agricole au profit d'intérêts industriels et financiers.",
                "extraText": ""
            },
            "Gouvernements et ministères": {
                "text" : "Nous devons arbitrer entre soutien à l'innovation et protection de l'élevage traditionnel. La viande cultivée représente une avancée technologique qui pourrait répondre aux défis environnementaux et alimentaires du futur, mais elle ne doit pas fragiliser notre modèle agricole ni sacrifier les milliers d'emplois qui en dépendent. Notre rôle est d'assurer une transition équilibrée, en accompagnant les évolutions du secteur agroalimentaire tout en préservant la diversité de notre production nationale. Des subventions peuvent être allouées aux nouvelles technologies, mais elles ne doivent pas se faire au détriment de l'économie rurale et des éleveurs, qui constituent le socle de notre souveraineté alimentaire. Cette souveraineté est un enjeu majeur : si la France ne se positionne pas sur ce marché, nous risquons de devoir importer toute notre viande cultivée depuis des pays comme les États-Unis ou la Chine, nous rendant dépendants de technologies et d'acteurs étrangers. Nous devons donc anticiper cette évolution et encourager un modèle où la viande cultivée peut coexister avec l'élevage, sans supplanter nos filières agricoles. Cela implique l'établissement d'un cadre réglementaire précis pour assurer la traçabilité, la transparence et un équilibre entre viande de synthèse et viande d'élevage. Nous devons également garantir que cette transition ne crée pas une fracture entre les territoires urbains et ruraux, et qu'elle respecte l'identité gastronomique française, qui est un élément clé de notre patrimoine et de notre attractivité économique. L'innovation ne peut se faire sans dialogue ni accompagnement, et nous avons la responsabilité d'organiser cette mutation de manière maîtrisée.",
                "extraText": ""
            },
            "ONG environnementales et protection animale": {
                "text" : "L'argent public devrait être investi dans la réduction de la consommation de viande, et non dans la création d'une industrie qui perpétue un modèle carnivore insoutenable. La viande de synthèse est présentée comme une solution écologique, mais elle ne fait que déplacer le problème au lieu de le résoudre. Plutôt que de transformer la production de viande, nous devons encourager un véritable changement de nos habitudes alimentaires en réduisant la demande et en favorisant des alternatives végétales plus accessibles et durables. Subventionner la viande cultivée revient à maintenir une dépendance à la consommation de chair animale, alors même que les études montrent que le passage à un régime plus végétal est l'une des solutions les plus efficaces pour lutter contre le réchauffement climatique et la déforestation. De plus, cette industrie risque de tomber sous le contrôle de quelques multinationales, concentrant encore davantage le pouvoir agro-industriel et renforçant les inégalités dans l'accès à l'alimentation. Plutôt que de financer une nouvelle filière qui pourrait reproduire les erreurs de l'élevage intensif, nous devons nous interroger sur ce qu'elle apporte réellement à la transition écologique. La viande cultivée est-elle un véritable progrès, ou une manière de repousser l'indispensable remise en question de notre modèle alimentaire ? Il est urgent d'orienter les politiques publiques vers une agriculture respectueuse des écosystèmes et une réduction de notre dépendance aux protéines animales, plutôt que de chercher à les répliquer artificiellement.",
                "extraText": ""
            },
            "Distributeurs": {
                "text" : "Nous sommes à la fois les gardiens d'un savoir-faire artisanal et des acteurs clés de la distribution alimentaire. Face à l'essor de la viande cultivée, nous risquons d'être marginalisés si cette nouvelle industrie prend trop d'ampleur. Notre métier repose sur des produits naturels et artisanaux, un lien direct avec les éleveurs et une expertise transmise depuis des générations. Cette industrialisation excessive risque de faire disparaître un pan entier de notre culture alimentaire et de notre patrimoine culinaire. Nous demandons une protection des métiers de la boucherie artisanale et un encadrement strict de l'introduction de ces nouveaux produits sur le marché, afin de préserver l'authenticité et la diversité de notre alimentation. Mais nous savons aussi que nous devons nous adapter. En tant que distributeurs, nous avons un rôle central à jouer dans cette transition, en maintenant une diversité de choix pour les consommateurs tout en anticipant les évolutions du marché. La viande cultivée pourrait trouver sa place dans certains segments, notamment dans l'industrie agroalimentaire ou la restauration rapide, mais elle ne remplacera pas immédiatement la viande d'élevage. Notre défi est donc d'équilibrer cette transformation sans provoquer une confrontation brutale avec les filières traditionnelles. Pour cela, une réglementation claire et une gestion des approvisionnements maîtrisée seront essentielles, afin d'éviter une rupture dans la chaîne logistique et une déstabilisation des marchés locaux.",
                "extraText": ""
            },
            "Consommateurs et opinion publique": {
                "text" : "La viande cultivée pourrait être une solution, mais seulement si elle est produite localement, de manière transparente, et si elle reste accessible à tous. Nous ne voulons pas d'un produit réservé à une élite urbaine, ni d'une transition alimentaire qui ferait de la viande d'élevage un luxe, creusant encore davantage les inégalités alimentaires. La question du coût sera déterminante : si la viande synthétique est trop chère, elle restera une niche sans impact réel sur les enjeux environnementaux et sociétaux. Nous avons aussi besoin de garanties sur sa qualité nutritionnelle et ses effets sur la santé avant d'envisager un changement durable de nos habitudes alimentaires. Peut-elle réellement remplacer la viande d'élevage sans altérer nos apports en nutriments essentiels ? Comment sera-t-elle perçue culturellement, dans un pays où la gastronomie et les produits du terroir jouent un rôle central ? Tant que ces interrogations demeurent, il est difficile d'accepter la viande de synthèse comme une alternative crédible. Son développement devra se faire en toute transparence, avec une information claire pour les consommateurs, et sans imposer un modèle alimentaire qui ne correspond pas à nos attentes.",
                "extraText": ""
            }
        },
        "Discours sur l'environnement": {
            "Sur quoi ?": {
                "text" : "Présentée comme une solution durable face aux défis environnementaux, elle promet une réduction significative des émissions de gaz à effet de serre, de la déforestation et de la consommation d'eau liée à l'élevage traditionnel. Cependant, son impact écologique réel reste débattu : la production en laboratoire nécessite des ressources énergétiques importantes, et son empreinte carbone à long terme dépendra des sources d'énergie utilisées et des progrès technologiques à venir.<br>Entre aspirations écologiques, viabilité industrielle et limites technologiques, le débat demeure ouvert.",
                "extraText": ""
            },
            "Chercheurs et scientifiques": {
                "text" : "En tant que scientifiques spécialisés dans la biotechnologie, nous voyons dans la viande cellulaire une solution révolutionnaire pour la planète. En produisant de la viande à partir de cellules cultivées en laboratoire, nous pourrions considérablement réduire les émissions de gaz à effet de serre et l'utilisation des ressources naturelles comme l'eau et les terres agricoles. Contrairement à l'élevage traditionnel, la viande cellulaire ne nécessite pas d'abattre des animaux, ce qui pourrait alléger la pression sur nos écosystèmes. Nous avons des données solides qui montrent qu'à long terme, cette technologie pourrait même permettre de restaurer des zones dégradées par l'agriculture industrielle, tout en répondant à la demande mondiale croissante de protéines animales.",
                "extraText": "(Favorables, mettent en avant la réduction des impacts environnementaux)"
            },
            "Éleveurs": {
                "text" : "Nous, agriculteurs et éleveurs, comprenons bien les défis environnementaux, mais nous devons être prudents face à l'essor de la viande cellulaire. Cela pourrait avoir des conséquences dramatiques pour notre mode de vie et l'économie rurale. Si cette technologie se généralise, elle risque de détruire des emplois dans nos secteurs et d'anéantir des savoir-faire qui existent depuis des siècles. De plus, l'impact environnemental de la viande cellulaire reste encore flou. Il ne suffit pas de dire que l'on réduit les gaz à effet de serre, il faut démontrer concrètement que cette production n'entraîne pas d'autres formes de pollution, notamment dans les processus de fabrication. Nous voulons un débat approfondi sur l'impact de cette industrie, car les zones rurales risquent de devenir les grandes perdantes de ce changement.",
                "extraText": "(Opposés, craignent un impact sur leur métier et leur mode de vie)"
            },
            "ONG environnementales et protection animale": {
                "text" : "La viande cellulaire pourrait être une solution partielle aux crises environnementales que nous connaissons. En effet, cette technologie pourrait réduire la déforestation, les émissions de gaz à effet de serre et la consommation d'eau, des enjeux majeurs de l'industrie de la viande conventionnelle. Toutefois, nous devons rester vigilants. Cette innovation ne doit pas simplement remplacer une forme de pollution par une autre. Si l'industrie se développe sans contrôle, nous pourrions voir l'émergence de géants industriels qui dominent le secteur alimentaire au détriment de la biodiversité et des petites fermes locales. Nous plaidons pour des régulations strictes et des garanties sur les conditions de production et de distribution de cette viande, afin de s'assurer qu'elle soit réellement bénéfique pour l'environnement et non pour l'enrichissement de quelques grandes entreprises.",
                "extraText": "(Partagés, certains voient une alternative durable, d'autres dénoncent l'industrialisation excessive)"
            },
            "Grands groupes agroalimentaires et investisseurs": {
                "text" : "Nous, en tant qu'acteurs de l'industrie agroalimentaire, voyons un énorme potentiel dans la viande cellulaire. C'est une innovation capable de répondre à la fois aux enjeux environnementaux et à la demande mondiale croissante de viande. Cette technologie peut réduire l'empreinte carbone de l'industrie alimentaire tout en garantissant une production de viande plus éthique, sans abattage d'animaux. Cependant, pour que cela devienne une solution de masse, il est crucial que l'ensemble de la chaîne de valeur, de la production à la distribution, soit rentable. Nous travaillons dur pour rendre cette technologie économiquement viable, tout en réduisant son coût de production. Nous avons besoin d'un cadre politique favorable et d'investissements pour accélérer cette transition, car nous croyons que la viande cellulaire peut offrir une alternative durable à l'élevage traditionnel.",
                "extraText": "(Favorable sous conditions, investit dans la recherche et le développement)"
            },
            "Gouvernements et ministères": {
                "text" : "En tant que responsables politiques et régulateurs, nous sommes conscients de l'énorme potentiel de la viande cellulaire en matière de durabilité. Elle pourrait effectivement répondre à certains des défis environnementaux majeurs, notamment en réduisant les émissions de gaz à effet de serre et la consommation de ressources. Toutefois, nous devons procéder avec prudence. Avant d'encourager cette transition, nous devons évaluer les impacts réels de la production de viande cellulaire, notamment en termes d'utilisation de nouvelles ressources énergétiques ou de risques sanitaires. Il est essentiel de mettre en place une régulation stricte pour garantir que cette nouvelle forme de production soit réellement bénéfique pour l'environnement, et qu'elle ne crée pas de nouvelles inégalités économiques ou de nouvelles formes de dépendances industrielles.",
                "extraText": "(Prudents, préoccupés par les impacts économiques et environnementaux)"
            },
            "Organismes publiques et de régulation": {
                "text" : "En tant que responsables politiques et régulateurs, nous sommes conscients de l'énorme potentiel de la viande cellulaire en matière de durabilité. Elle pourrait effectivement répondre à certains des défis environnementaux majeurs, notamment en réduisant les émissions de gaz à effet de serre et la consommation de ressources. Toutefois, nous devons procéder avec prudence. Avant d'encourager cette transition, nous devons évaluer les impacts réels de la production de viande cellulaire, notamment en termes d'utilisation de nouvelles ressources énergétiques ou de risques sanitaires. Il est essentiel de mettre en place une régulation stricte pour garantir que cette nouvelle forme de production soit réellement bénéfique pour l'environnement, et qu'elle ne crée pas de nouvelles inégalités économiques ou de nouvelles formes de dépendances industrielles.",
                "extraText": "(Prudents, préoccupés par les impacts économiques et environnementaux)"
            }
        }
    };

    // Fonction pour récupérer le texte du discours en fonction du type et du rôle
    function getDiscoursText(discoursCategory, role) {
        if (discoursMapping[discoursCategory] && discoursMapping[discoursCategory][role]) {
            return discoursMapping[discoursCategory][role];
        }
        return {
            text: `Texte par défaut pour "${discoursCategory}" et "${role}".`,
            extraText: "Texte supplémentaire par défaut."
        };
    }

    // Étape 1 → Étape 2 (Affichage des hexagones)
    slicesContainer.addEventListener("click", function (e) {
        const slice = e.target.closest('.image-slice');
        if (!slice) return;
    
        const sliceText = slice.getAttribute('data-title') || "Discours";
        titleEl.textContent = sliceText;

        hexGrid.innerHTML = originalHexHTML;
    
        const hexes = hexGrid.querySelectorAll(".hex");
        hexes.forEach(hex => {
            const roleEl = hex.querySelector("p");
            if (roleEl) {
                const role = roleEl.textContent.trim();
                if (!(discoursMapping[sliceText] && discoursMapping[sliceText][role])) {
                    hex.remove();
                }
            }
        });
    
        slicesContainer.classList.replace("fade-in", "fade-out");
        hexGrid.classList.replace("fade-out", "fade-in");
        contentWrap.classList.replace("fade-out", "fade-in");
        swapButton.classList.replace("fade-out", "fade-in");
    
        setTimeout(() => {
            document.body.style.overflow = 'auto';
        }, 1000);
    });

    // Étape 2 → Étape 3 (Affichage du discours)
    const hexagons = document.querySelectorAll(".hex a");
    hexagons.forEach(hex => {
        hex.addEventListener("click", function (event) {
            event.preventDefault();
    
            document.body.style.overflow = 'hidden';
    
            const imgHex = this.querySelector("img");
            const roleEl = this.querySelector("p");
    
            if (imgHex) {
                discoursImage.src = imgHex.src;
            }
    
            if (roleEl) {
                const discoursCategory = titleEl.textContent;
                const role = roleEl.textContent.trim();
                const { text, extraText } = getDiscoursText(discoursCategory, role);
    
                discoursTitle.innerHTML = `
                    <div style="text-align: center;">${role}</div>
                    <br>
                    <span style="font-weight: normal; font-size: 16px; text-align: center;">${extraText}</span>
                `;
    
                discoursTextEl.innerHTML = text;
            }
    
            hexGrid.classList.replace("fade-in", "fade-out");
            discoursContainer.classList.replace("fade-out", "fade-in");
            closeButton.classList.add("visible");
            swapButton.classList.replace("fade-in", "fade-out");
        });
    });

    hexGrid.addEventListener("click", function(event) {
        const hexLink = event.target.closest(".hex a");
        if (!hexLink) return;
    
        event.preventDefault();
        document.body.style.overflow = 'hidden';
    
        const imgHex = hexLink.querySelector("img");
        const roleEl = hexLink.querySelector("p");
    
        if (imgHex) {
            discoursImage.src = imgHex.src;
        }
    
        if (roleEl) {
            const discoursCategory = titleEl.textContent;
            const role = roleEl.textContent.trim();
            const { text, extraText } = getDiscoursText(discoursCategory, role);
    
            discoursTitle.innerHTML = `
                <div style="text-align: center;">${role}</div>
                <br>
                <span style="font-weight: normal; font-size: 16px; text-align: center;">${extraText}</span>
            `;
            discoursTextEl.innerHTML = text;
        }
    
        hexGrid.classList.replace("fade-in", "fade-out");
        discoursContainer.classList.replace("fade-out", "fade-in");
        closeButton.classList.add("visible");
        swapButton.classList.replace("fade-in", "fade-out");
    });

    // Étape 3 → Retour à l'étape 2 (Fermeture du discours)
    closeButton.addEventListener("click", function () {
        closeButton.classList.remove("visible");
        discoursContainer.classList.replace("fade-in", "fade-out");
        hexGrid.classList.replace("fade-out", "fade-in");
        swapButton.classList.replace("fade-out", "fade-in");

        document.body.style.overflow = 'auto';
    });

    // Bouton "Changer de discours" (Retour à l'étape 1)
    if (swapButton) {
        swapButton.addEventListener("click", function () {
            hexGrid.classList.replace("fade-in", "fade-out");
            contentWrap.classList.replace("fade-in", "fade-out");
            slicesContainer.classList.replace("fade-out", "fade-in");

            swapButton.classList.replace("fade-in", "fade-out");

            document.body.style.overflow = 'hidden';
        });
    }
});

function updateSlicesWithImage(imageSrc) {
    const container = document.querySelector('.image-container-slices');
    const img = document.getElementById('mainImage');
    img.src = imageSrc;
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const slices = 5;
    const sliceWidth = containerWidth / slices;

    const sliceTexts = [
        "Les enjeux technologiques",
        "Discours sur les enjeux sanitaires",
        "Discours sur l'ancrage local versus la délocalisation",
        "Enjeux liés à l'emploi, à l'économie et à l'industrie",
        "Discours sur l'environnement"
    ];

    const existingSlices = document.querySelectorAll('.image-slice, .bar');
    existingSlices.forEach(slice => slice.remove());

    for (let i = 0; i < slices; i++) {
        const slice = document.createElement('div');
        slice.classList.add('image-slice');
        slice.style.width = `${sliceWidth}px`;
        slice.style.left = `${i * sliceWidth}px`;
        slice.style.background = `url(${img.src}) -${i * sliceWidth}px 0 / ${containerWidth}px ${containerHeight}px no-repeat`;
        
        slice.setAttribute('data-title', sliceTexts[sliceTexts.length - 1 - i]);

        container.appendChild(slice);

        if (i < slices - 1) {
            const bar = document.createElement('div');
            bar.classList.add('bar');
            bar.style.left = `${(i + 1) * sliceWidth - 2.5}px`;
            container.appendChild(bar);
        }
    }
}

window.onload = function() {
    updateSlicesWithImage(document.getElementById('mainImage').src);
};

window.onresize = function() {
    updateSlicesWithImage(document.getElementById('mainImage').src);
};
