<template>
  <div>
    <home-hero />

    <!-- Hero Card Section -->
    <v-container class="mt-12">
      <v-row justify="center">
        <v-row class="fe-app-max-width" justify="center">
          <v-col md="3" v-for="(info, i) in heroCard" :key="i + info.icon">
            <hero-card :info="info" />
          </v-col>
        </v-row>
      </v-row>
    </v-container>

    <!-- discover section -->
    <v-container id="discover" class="mt-12 pt-12">
      <v-row justify="center" class="mt-12">
        <v-row class="fe-app-max-width fill-height" justify="center" align="center">
          <v-col md="8">
            <our-work />
          </v-col>

          <v-col class="ml-1" md="3">
            <h2 class="text-capitalize fe-section-title text-right mb-4">What have we done with your help?</h2>
            <p class="text-right">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit esse vel autem sequi laudantium molestiae repellendus
            </p>

            <p class="text-right grey--text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit esse vel autem sequi 
            </p>

            <p class="text-right grey--text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit esse vel autem sequi laudantium molestiae repellendus
            </p>
            <v-card-actions class="px-0 pt-8">
              <v-spacer></v-spacer>

              <v-btn class="text-capitalize font-weight-bold px-5" text rounded>Discover <v-icon class="ml-2" small>mdi-arrow-down</v-icon></v-btn>
              <v-btn class="text-capitalize font-weight-bold secondary--text ml-2 px-5" color="primary" rounded><v-icon class="mr-2">mdi-heart</v-icon> Donate Now</v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-row>
    </v-container>

    <!-- Whom we helped -->
    <v-container id="whom-we-helped" class="mt-12 pt-12">
      <v-row justify="center" class="mt-12">
        <v-row class="fe-app-max-width" justify="center">
          <v-col md="9">
            <v-row>
              <v-col md="12">
                <h2 class="text-capitalize fe-section-title mb-4">Learn the stories of those <br> we've already helped</h2>
              </v-col>
              <v-col v-for="(story, i) in stories" :key="i + story.img" md="4">
                <stories-card :info="story" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-row>
    </v-container>

    <!-- We are always there -->
    <v-container class="mt-12 pt-12">
      <v-row justify="center" class="mt-12">
        <v-row class="fe-app-max-width fill-height" justify="center" align="center">
          <v-col md="6">
            <h2 class="text-capitalize fe-section-title mb-4">We are always where <br> others need help.</h2>
            <other-need />
          </v-col>
          <v-col md="6">
            <v-img src="../assets/images/Africa-Map-PNG-Picture-1.png"></v-img>
          </v-col>

          <v-col class="mt-12 pt-12" md="9">
            <v-img src="../assets/images/malnorished_1.jpg" height="400">
              <v-row class="fill-height fe-overlay" justify="center" align="center">
                <v-col cols="12">
                  <h1 class="text-capitalize text-center white--text fe-hero-title">Join our<span class="fe-hero-undeline-title">Action!</span> <br>
                    Everyone <span class="fe-hero-undeline-title">can help</span>.
                  </h1>

                  <v-card-actions class="mt-3">
                    <v-spacer></v-spacer>
                    <v-btn class="text-capitalize font-weight-bold secondary--text" color="primary" rounded><v-icon class="mr-2">mdi-heart</v-icon> Donate Now</v-btn>
					          <v-btn class="text-capitalize font-weight-bold ml-4 secondary primary--text" rounded>Join Our Team<v-icon class="ml-2" small>mdi-arrow-down</v-icon></v-btn>
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-col>
              </v-row>
            </v-img>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import HeroCard from '../components/HeroCard.vue'
import HomeHero from '../components/HomeHero.vue'
import StoriesCard from '../components/StoriesCard.vue'
import OtherNeed from '../components/OtherNeed.vue'
import OurWork from '../components/OurWork.vue'
export default {
  components: { HomeHero, HeroCard, StoriesCard, OtherNeed, OurWork },
  name: 'Home',
  data(){
    return{
      heroCard: [
        {
          icon: 'mdi-food', 
          title: 'Healthy Food', 
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam, minima quod architecto'
        },
        {
          icon: 'mdi-book-alphabet', 
          title: 'Education', 
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam, minima quod architecto'
        },
        {
          icon: 'mdi-bottle-tonic-plus', 
          title: 'Medical', 
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam, minima quod architecto'
        }
      ],
      stories: [
        {
          src: 'https://www.youtube.com/embed/nI6GFWBqX1U',
          sName: 'Mamba Emelda',
          age: '4 years old',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam, minima quod architecto'
        },
        {
          src: 'https://www.youtube.com/embed/zXIKZE0OWHE',
          sName: 'Amba Alic',
          age: '7 years old',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam, minima quod architecto'
        },
        {
          src: 'https://www.youtube.com/embed/EfRNIa1CenM',
          sName: 'Abu Ali',
          age: '10 years old',
          description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero numquam, minima quod architecto'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.fe-overlay{
  background-color: rgba(0, 0, 0, 0.676) !important;
}
</style>
