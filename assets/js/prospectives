let isAnimating = false;

function showPopup(title, event) {
    if (isAnimating) return;
    isAnimating = true;

    let clickedPanel = event.currentTarget;
    let panelsContainer = document.querySelector('.panels');

    let additionalText = "";
    switch (title) {
        case "Scénario rejet complet":
            additionalText = `<br>
                <strong>Législation favorable mais échec commercial et culturel</strong><br><br>
                Au niveau législatif, la France opte pour une autorisation de mise sur le marché de la viande cultivée. Bien qu'elle soit autorisée, ce produit fait face à une opposition massive. 
                Cette opposition est portée par des arguments culturels, sanitaires, économiques et écologiques. L'attachement profond au terroir et aux traditions gastronomiques joue un rôle clé dans ce rejet. 
                L'idée de consommer une viande issue de laboratoires heurte la perception de la viande traditionnelle. Les chefs, restaurateurs et consommateurs dénoncent un produit artificiel, déconnecté des savoir-faire artisanaux et jugé contre-nature.<br><br>
                D'un point de vue commercial, les consommateurs expriment une forte méfiance, influencés par une peur de l'inconnu et des procédés industriels, souvent alimentée par les médias. Le goût, différent de celui de la viande traditionnelle, et son prix trop élevé accentuent le manque d'attrait. Cette réticence des consommateurs entraîne un désintérêt des distributeurs, qui, face à une demande trop faible et à des coûts de production importants, refusent de commercialiser ce produit. 
                Enfin, le rejet de la viande cultivée s'ancre également dans des oppositions culturelles et religieuses. Certains groupes voient dans cette innovation une atteinte aux traditions alimentaires et une menace pour l'élevage français.<br><br><br>
                <strong>Législation défavorable et interdiction de commercialisation</strong><br><br>
                Au niveau législatif, la France adopte une position intransigeante. Sous la pression des syndicats agricoles tels que la FNSEA et la Confédération Paysanne, une loi interdit la production et la vente de viande cultivée sur le territoire national. 
                Alors que d'autres pays européens comme les Pays-Bas et l'Allemagne avancent vers une réglementation encadrée, la France maintient une posture ferme et milite contre toute validation de la viande cultivée au niveau européen. Toutefois, cette résistance pourrait entraîner des tensions commerciales et un retard technologique face aux nations qui adoptent cette innovation alimentaire.
            `;
            break;
        case "Adoption progressive":
            additionalText = `<br>
                <strong>La législation</strong><br><br>
                L'acceptation de la viande cultivée pourrait varier considérablement selon les régions du monde, en fonction des réglementations locales et des perceptions culturelles. Certains pays pourraient adopter cette technologie plus rapidement que d'autres. L'union européenne et la France autorisent la commercialisation de la viande de synthèse avec des restrictions. Cela pourrait inclure par exemple des limitations sur les types de produits, des exigences d'étiquetage strictes pour informer clairement les consommateurs, et des contrôles de sécurité renforcés. Les institutions pourraient soumettre des exigences spécifiques à la production de viande de synthèse et imposer aussi des quotas sur la production.<br><br><br>
                <strong>Les consommateurs</strong><br><br>
                De la même manière, les consommateurs pourraient ne pas être favorables à l'adoption de cette nouvelle viande dans leur quotidien car il ne s'agit pas d'une “vraie viande” d'élevage, ou bien en soutien aux éleveurs. Ainsi, seuls les consommateurs soucieux de l'environnement ou contre la maltraitance animale adopteraient ce nouveau mode d'alimentation.<br><br><br>
                <strong>Un produit considéré comme niche ou comme un substitut</strong><br><br>
                Les entreprises françaises se concentrent sur la production de viande de synthèse pour des marchés de niche (consommateurs soucieux de l'environnement, régime alimentaire spécifique, ou les early adopters). La viande de synthèse est positionnée comme un complément à la viande traditionnelle ou des substituts végétaux actuels, comme la viande de soja, en conquérant une petite part du marché. Elle pourrait être utilisée dans certains plats préparés, ou vendue dans des circuits spécialisés (magasins bio, restaurants gastronomiques, etc.).<br><br><br>
                <strong>Communication</strong><br><br>
                Les entreprises mènent des campagnes d'information et de communication pour expliquer le processus de fabrication de la viande de synthèse, ses avantages et répondre aux inquiétudes des consommateurs via des dégustations, des campagnes publicitaires et des ambassadeurs.<br><br><br>
                <strong>Prix</strong><br><br>
                Pour être accessible, la viande de synthèse est proposée à un prix compétitif par rapport à la viande traditionnelle, ou du moins à la viande traditionnelle.<br><br><br>
                <strong>Avancées technologiques</strong><br><br>
                Les entreprises continuent d'investir dans la recherche et le développement pour améliorer la qualité, le goût et le coût de la viande de synthèse. Des partenariats sont établis entre les entreprises, les chercheurs et les distributeurs pour créer une filière de production et de distribution spécifique.
            `;
            break;
        case "Adoption totale":
            additionalText = `<br>
                L'acceptation totale de la viande cultivée ou de synthèse comme solution massive pour remplacer la viande traditionnelle reposerait sur plusieurs facteurs interconnectés, allant de l'innovation technologique à l'acceptation sociétale et culturelle. Si ce scénario devait se réaliser, elle aurait des implications profondes dans plusieurs domaines : environnement, économie, santé et société.<br><br><br>
                <strong>1. Avantages environnementaux</strong><br><br>
                L'un des principaux arguments en faveur de la viande cultivée est son potentiel pour réduire l'impact environnemental de la production de viande. En effet, l'élevage traditionnel est responsable de grandes quantités d'émissions de gaz à effet de serre (GES) alors que la viande cultivée permettrait de réduire ces émissions et d'économiser les ressources en eau et en terres agricoles.<br><br><br>
                <strong>2. Acceptation sociétale et culturelle</strong><br><br>
                L'acceptation de la viande cultivée ne dépendra pas uniquement de la technologie et de l'économie. Des facteurs sociétaux et culturels jouent également un rôle crucial. En effet, la viande cultivée pourrait susciter des réticences en raison de la méconnaissance du processus de fabrication et de l'idée de consommer quelque chose de "créé en laboratoire." Il faudra donc éduquer le public sur les avantages de cette viande, en particulier dans les domaines de la santé, de l'environnement et de la sécurité alimentaire.<br><br>
                Par ailleurs, certaines personnes peuvent avoir des réticences à l'idée de manger une viande "non naturelle," même si elle est produite à partir de cellules animales. Il sera essentiel de proposer des produits qui reproduisent avec précision le goût et la texture de la viande traditionnelle pour surmonter cette résistance. En outre, certains consommateurs pourraient être sensibles à des arguments moraux, en raison de la souffrance animale liée à l'élevage traditionnel.<br><br>
                Enfin, l'acceptation de la viande cultivée nécessitera également une révision des normes réglementaires. Les gouvernements et les agences de sécurité alimentaire devront évaluer et approuver ces produits pour garantir leur sécurité et leur conformité aux standards de consommation alimentaire. Pour encadrer ce changement, la France devra mettre en place un cadre réglementaire strict, sous le contrôle d'organismes comme l'ANSES et l'INRAE. L'étiquetage serait encadré pour éviter toute confusion avec la viande d'élevage traditionnel, suivant le modèle des régulations sur les substituts végétaux, qui ne peuvent déjà plus utiliser des termes comme "steak" ou "saucisse" pour désigner des produits à base de plantes. De plus, le soutien gouvernemental à travers des incitations fiscales ou des financements pour la recherche pourrait également jouer un rôle clé dans cette transition. L'État pourrait subventionner massivement les infrastructures de production de viande cellulaire, à l'image des investissements faits dans l'agriculture bio ou les protéines végétales.<br><br><br>
                <strong>3. Implications économiques et sociales</strong><br><br>
                Si la viande cultivée venait à remplacer la viande traditionnelle, cela pourrait bouleverser des industries entières, comme l'élevage, la production d'aliments pour animaux, ou les industries liées aux abattoirs. Une telle transition nécessiterait des reconversions professionnelles massives, avec des programmes de formation pour les travailleurs affectés.
                En contrepartie, de nouvelles industries émergeraient autour de la production de viande cultivée, des biotechnologies à la fabrication de bioréacteurs, créant ainsi de nouveaux emplois dans des secteurs de pointe, comme la biotechnologie, la bio-ingénierie et les technologies alimentaires.<br><br>
                À long terme, la production de viande cultivée pourrait permettre de réduire les prix, ce qui rendrait la viande plus accessible à un plus grand nombre de personnes. Cela pourrait avoir un impact positif sur les populations dans les pays en développement, où l'accès à la viande est souvent limité par des contraintes économiques.<br><br>
                En conclusion, une acceptation totale de la viande cultivée comme solution massive de remplacement de la viande traditionnelle impliquerait non seulement des avancées technologiques et une réduction des coûts de production, mais également une adaptation des mentalités et des politiques publiques. Les bénéfices environnementaux sont évidents, et l'impact positif sur la santé et la sécurité alimentaire pourrait être significatif, mais il reste des obstacles à surmonter, notamment les questions économiques, sociales et culturelles. Si ces défis sont relevés, la viande cultivée pourrait devenir un pilier central d'un système alimentaire plus durable et équitable.
            `;
            break;
    }

    let clonedPanel = clickedPanel.cloneNode(true);
    clonedPanel.style.position = "absolute";
    clonedPanel.style.top = clickedPanel.offsetTop + "px";
    clonedPanel.style.left = clickedPanel.offsetLeft + "px";
    clonedPanel.style.width = clickedPanel.offsetWidth + "px";
    clonedPanel.style.height = clickedPanel.offsetHeight + "px";
    clonedPanel.style.zIndex = "1000";
    clonedPanel.style.transition = "all 1s ease-in-out";
    document.body.appendChild(clonedPanel);

    clonedPanel.classList.add("no-hover");
    clonedPanel.style.cursor = "default";

    panelsContainer.querySelectorAll(".panel").forEach((panel) => {
        if (panel !== clickedPanel) {
            panel.style.opacity = "0";
            panel.style.transition = "opacity 0.5s ease-in-out";
        }
    });

    setTimeout(() => {
        clonedPanel.style.top = "155px";
        clonedPanel.style.left = "0";
        clonedPanel.style.width = "100vw";
        clonedPanel.style.height = "calc(100vh - 155px)";
    }, 50);

    setTimeout(() => {
        let textContainer = document.createElement("div");
        textContainer.style.position = "absolute";
        textContainer.style.display = "flex";
        textContainer.style.flexDirection = "column";
        textContainer.style.alignItems = "center";
        textContainer.style.width = "80%";
        textContainer.style.maxHeight = "80%";
        textContainer.style.height = "auto";
        textContainer.style.background = "rgba(0, 0, 0, 0.8)";
        textContainer.style.border = "2px solid black";
        textContainer.style.borderRadius = "12px";
        textContainer.style.backdropFilter = "blur(3px)";
        textContainer.style.color = "white";
        textContainer.style.fontSize = "18px";
        textContainer.style.textAlign = "center";
        textContainer.style.padding = "12px";
        textContainer.style.opacity = "0"; 
        textContainer.style.transition = "opacity 0.5s ease-in-out";
        textContainer.style.overflow = "hidden";

        let titleElement = document.createElement("div");
        titleElement.style.fontWeight = "bold";
        titleElement.style.fontSize = "20px";
        titleElement.style.width = "100%"; 
        titleElement.style.padding = "10px";
        titleElement.style.borderBottom = "1px solid white";
        titleElement.style.position = "sticky";
        titleElement.style.top = "0";
        titleElement.style.background = "rgba(0, 0, 0, 0.9)";
        titleElement.style.zIndex = "2";
        titleElement.style.borderRadius = "12px 12px 0 0";
        titleElement.textContent = title;

        let scrollableText = document.createElement("div");
        scrollableText.innerHTML = additionalText;
        scrollableText.style.flex = "1";
        scrollableText.style.width = "100%";
        scrollableText.style.padding = "10px";
        scrollableText.style.textAlign = "justify";
        scrollableText.style.overflowY = "auto";
        scrollableText.style.maxHeight = "calc(100% - 50px)";
        scrollableText.style.scrollbarColor = "#444 #222";
        scrollableText.style.scrollbarWidth = "thin";

        textContainer.appendChild(titleElement);
        textContainer.appendChild(scrollableText);
        clonedPanel.appendChild(textContainer);

        textContainer.style.left = "50%";
        textContainer.style.top = "50%";
        textContainer.style.transform = "translate(-50%, -50%)";

        setTimeout(() => {
            textContainer.style.opacity = "1";
        }, 100);

        isAnimating = false;
    }, 1000);
}
