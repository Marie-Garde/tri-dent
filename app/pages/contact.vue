<template>
  <div class="contact">
    <div class="contact__banner">
      <div class="contact__banner__image">
        <div class="contact__banner__title">
          <h1>Contactez-nous</h1>
          <Divider />
        </div>
      </div>
    </div>
    <div class="contact__container">
      <div class="contact__find-us__title">
        <h2>Nous trouver ?</h2>
        <Divider />
      </div>
      <div class="contact__find-us">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5773.338457237664!2d1.3208074124326892!3d43.655049752189676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aeae4c181ef355%3A0x9643e05d3d67be3e!2s1%20Rte%20d&#39;Aussonne%2C%2031700%20Cornebarrieu!5e0!3m2!1sfr!2sfr!4v1764072551783!5m2!1sfr!2sfr"
            width="420"
            height="300"
            style="border: 0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <Divider vertical />
        <div>
          <p class="contact__find-us__text">
            <span class="contact__find-us__info">
              <Icon name="mdi:map-marker" size="24" />
              3 Rte d'Aussonne, 31700 Cornebarrieu
            </span>
            <span class="contact__find-us__info">
              <Icon name="mdi:email" size="24" />
              secretariat@scmtrident.fr
            </span>
            <span class="contact__find-us__info">
              <Icon name="mdi:phone" size="24" />
              05 61 06 91 92
            </span>
            <span class="contact__find-us__info contact__find-us__info--hours">
              <Icon name="mdi:clock-outline" size="24" />
              lundi au jeudi 9h-12h30 14h-18h<br />
              vendredi 9h-13h 14h-17h
            </span>
          </p>
        </div>
      </div>
      <div class="contact__faq">
        <h2>Questions fréquentes</h2>
        <Divider />
        <Accordion
          id="accordion1"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
          :modelValue="openAccordionId === 'accordion1'"
          @update:modelValue="
            openAccordionId = $event === openAccordionId ? null : $event
          "
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </Accordion>
        <Accordion
          id="accordion2"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
          :modelValue="openAccordionId === 'accordion2'"
          @update:modelValue="
            openAccordionId = $event === openAccordionId ? null : $event
          "
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </Accordion>
        <Accordion
          id="accordion3"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
          :modelValue="openAccordionId === 'accordion3'"
          @update:modelValue="
            openAccordionId = $event === openAccordionId ? null : $event
          "
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </Accordion>
        <Accordion
          id="accordion4"
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
          :modelValue="openAccordionId === 'accordion4'"
          @update:modelValue="
            openAccordionId = $event === openAccordionId ? null : $event
          "
        >
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          qui ratione voluptatem sequi nesciunt.
        </Accordion>
      </div>
      <div class="contact__form">
        <h2>Envoyez nous un message</h2>
        <Divider />
        <Form />
      </div>
    </div>
  </div>
</template>

<script setup>
import Form from "@/components/Form.vue";
import { ref } from "vue";

// todo: background-color behind accordions, upgrade accordions function to show/hide content, layout width for form and accordions part

const openAccordionId = ref(null);
</script>

<style scoped lang="scss">
@use "@/assets/scss/variables" as *;
.contact {
  &__container {
    max-width: 1280px;
    margin: 0 auto;
  }

  &__banner {
    position: relative;
    background-color: $color-green;
    height: 80vh;
    display: flex;
    align-items: flex-end;
    justify-content: center;

    &__image {
      position: absolute;
      top: 30%;
      width: 80%;
      height: 80%;
      background: url("/images/contact/contact.png");
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      box-shadow: 0 2px 4px rgba($color-dark, 0.25);
    }

    &__title {
      background-color: $color-white;
      padding: 0 $spacing-xl $spacing-lg $spacing-xl;

      .divider {
        margin: 0 auto;
      }
    }
  }

  &__find-us {
    margin: 0 auto;
    background-color: $color-white;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    .divider--vertical {
      display: flex;
      justify-content: center;
    }

    &__title {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 80px;
    }

    &__text {
      width: 420px;
      padding-top: $spacing-md;
      display: flex;
      flex-direction: column;
      gap: $spacing-lg;
    }

    &__info {
      display: flex;
      align-items: center;
      gap: $spacing-sm;
      &--hours {
        align-items: flex-start;
      }
    }
  }

  &__faq,
  &__form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__faq {
    .divider {
      margin-bottom: $spacing-lg;
    }
  }

  &__form {
    background-color: $color-bg-blue;
  }
}
</style>
