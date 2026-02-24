import{L as a}from"./mGaVOIPS.js";import{s}from"./J8spaat4.js";const n=a("articles",{state:()=>({articles:[],recentArticles:[],tags:[],thematiques:[],loading:!1,error:null}),getters:{articlesByThematique:e=>t=>e.articles.filter(r=>r.thematique?.some(i=>i._id===t)),articlesByTag:e=>t=>e.articles.filter(r=>r.tags?.some(i=>i._id===t)),articleBySlug:e=>t=>e.articles.find(r=>r.slug.current===t)},actions:{async fetchArticles(){if(!(this.articles.length>0)){this.loading=!0,this.error=null;try{const e=`*[_type == "article"] | order(publishedAt desc) {
          _id,
          titre,
          slug,
          icone,
          contenu,
          publishedAt,
          "thematique": thematique[]-> {
            _id,
            titre
          },
          "tags": tags[]-> {
            _id,
            titre
          }
        }`;this.articles=await s.fetch(e)}catch(e){this.error=e.message||"Erreur lors du chargement des articles",console.error("Erreur Sanity:",e)}finally{this.loading=!1}}},async fetchTags(){if(!(this.tags.length>0))try{const e=`*[_type == "tag"] | order(titre asc) {
          _id,
          titre
        }`;this.tags=await s.fetch(e)}catch(e){console.error("Erreur lors du chargement des tags:",e)}},async fetchThematiques(){if(!(this.thematiques.length>0))try{const e=`*[_type == "thematique"] | order(titre asc) {
          _id,
          titre
        }`;this.thematiques=await s.fetch(e)}catch(e){console.error("Erreur lors du chargement des thématiques:",e)}},async fetchRecentArticles(){if(!(this.recentArticles.length>0))try{const e=`*[_type == "article"] | order(publishedAt desc) [0...6] {
          _id,
          titre,
          slug,
          icone
        }`;this.recentArticles=await s.fetch(e)}catch(e){console.error("Erreur lors du chargement des articles récents:",e)}}}});export{n as u};
