<template>
  <div class="legal-notice">
    <div class="legal-notice__banner">
      <h1>Mentions Légales</h1>
      <Divider light />
    </div>
    <div class="legal-notice__content">
      <h2>1. Informations légales</h2>
      <p>
        Conformément aux dispositions de l'article 6-III et 19 de la Loi n°
        2004-575 du 21 juin 2004 pour la Confiance dans l'économie numérique,
        dite L.C.E.N., nous portons à la connaissance des utilisateurs et
        visiteurs du site les informations suivantes :
      </p>
      <ul>
        <li>
          <strong>Propriétaire du site :</strong> Cabinet Dentaire Tri-Dent SCM
        </li>
        <li><strong>Adresse :</strong> 3 Rte d'Aussonne, 31700 Cornebarrieu</li>
        <li><strong>Téléphone :</strong> 05 61 06 91 92</li>
        <li>
          <strong>Adresse de courrier électronique :</strong>
          secretariat@scmtrident.fr
        </li>
        <li>
          <strong>Responsable de la publication :</strong> [Nom du responsable à
          compléter]
        </li>
        <li>
          <strong>Hébergeur du site :</strong> [Nom de l'hébergeur à compléter,
          ex: OVH, Netlify, Vercel]
        </li>
        <li>
          <strong>Création du site :</strong> L'envolée numérique<br />
          101 chemin de la salade ponsan 31400 Toulouse<br />
          SIREN : 934 339 706
        </li>
      </ul>

      <h2>2. Protection des données personnelles</h2>
      <p>
        Le cabinet s'engage à ce que la collecte et le traitement de vos
        données, effectués à partir du site www.tri-dent.fr, soient conformes au
        règlement général sur la protection des données (RGPD) et à la loi
        Informatique et Libertés.
      </p>
      <h3>Collecte des données</h3>
      <p>
        Les informations personnelles collectées sur ce site sont les suivantes
        :
      </p>
      <ul>
        <li>
          <strong>Formulaire de contact :</strong> Sont collectés votre nom,
          prénom, adresse email et/ou numéro de téléphone, le nom du dentiste
          référent que vous sélectionnez, ainsi que le contenu de votre message.
        </li>
      </ul>
      <h3>Finalité des données collectées</h3>
      <p>
        La collecte de ces données a pour unique but de pouvoir recontacter les
        personnes qui ont fait une demande via le formulaire de contact, de
        répondre à leurs questions et de gérer les demandes de rendez-vous. Ces
        données ne sont en aucun cas cédées ou vendues à des tiers.
      </p>
      <h3>Durée de conservation des données</h3>
      <p>
        Les données sont conservées pendant la durée nécessaire au traitement de
        votre demande et dans le respect des délais légaux.
      </p>
      <h3>Vos droits</h3>
      <p>
        Conformément à la loi « informatique et libertés » du 6 janvier 1978
        modifiée, vous bénéficiez d’un droit d’accès, de rectification, de
        suppression et d’opposition aux informations qui vous concernent. Vous
        pouvez exercer ce droit en vous adressant à :
      </p>
      <p>
        Cabinet Dentaire Tri-Dent SCM<br />
        3 Rte d'Aussonne, 31700 Cornebarrieu<br />
        ou par email : secretariat@scmtrident.fr
      </p>

      <h2>3. Propriété intellectuelle</h2>
      <p>
        L'ensemble de ce site (contenus, textes, images, vidéos, logos) est la
        propriété exclusive du Cabinet Dentaire Tri-Dent SCM, à l'exception des
        marques, logos ou contenus appartenant à d'autres sociétés partenaires
        ou auteurs. Toute reproduction, représentation, modification,
        publication, adaptation de tout ou partie des éléments du site, quel que
        soit le moyen ou le procédé utilisé, est interdite, sauf autorisation
        écrite préalable du propriétaire.
      </p>

      <h2>4. Cookies</h2>
      <p>
        Le site www.tri-dent.fr peut-être amené à vous demander l’acception des
        cookies pour des besoins de statistiques, d'affichage et de tracking. Un
        cookie est une information déposée sur votre disque dur par le serveur
        du site que vous visitez. Il contient plusieurs données qui sont
        stockées sur votre ordinateur dans un simple fichier texte auquel un
        serveur accède pour lire et enregistrer des informations.
      </p>

      <h2>5. Liens hypertextes</h2>
      <p>
        Le site internet peut offrir des liens vers d’autres sites internet ou
        d’autres ressources disponibles sur Internet. Le Cabinet Dentaire
        Tri-Dent SCM ne dispose d'aucun moyen pour contrôler les sites en
        connexion avec ses sites internet, ne répond pas de la disponibilité de
        tels sites et sources externes, ni ne la garantit.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "default",
});

useHead({
  title: "Mentions Légales - Cabinet Dentaire Tri-Dent",
  meta: [
    {
      name: "description",
      content:
        "Consultez les mentions légales du Cabinet Dentaire Tri-Dent. Informations sur le propriétaire du site, la protection des données personnelles, la propriété intellectuelle et l'utilisation des cookies.",
    },
  ],
});
</script>

<style lang="scss" scoped>
@use "@/assets/scss/variables" as *;

.legal-notice {
  &__banner {
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: $color-green;
    color: $color-white;

    h1 {
      color: $color-white;
      font-size: 36px;
    }
  }

  &__content {
    max-width: 960px;
    margin: $spacing-xl auto;
    padding: 0 $spacing-md;
    line-height: 1.6;

    h2 {
      margin-top: $spacing-lg;
      margin-bottom: $spacing-md;
    }

    h3 {
      margin-top: $spacing-md;
      margin-bottom: $spacing-sm;
    }

    ul {
      padding-left: $spacing-lg;
    }

    p,
    li {
      margin-bottom: $spacing-sm;
    }

    strong {
      font-weight: 600;
    }
  }
}

@media (max-width: 768px) {
  .legal-notice {
    &__banner {
      height: 250px;
    }
    &__content {
      margin: $spacing-lg auto;
    }
  }
}
</style>
