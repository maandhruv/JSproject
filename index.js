
$(function () {

    const headerNav = $('header nav');
    const hamburgerMenu = $('#hamburger-menu');
    const search = $('#search');
    const searchContainerHide = $('#search-container-hide');
    const searchContainer = $('#search-container');


    // initialize hero slider
    $('#hero-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnFocus: false,
      pauseOnHover: false,
      fade: true,
      speed: 1000,
      cssEase: 'linear'
    });

    $('#trainers-slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      prevArrow: '<a href="#" class="slick-arrow slick-prev">previous</a>',
      nextArrow: '<a href="#" class="slick-arrow slick-next">next</a>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            arrows: false
          }
        },
        {
          breakpoint: 530,
          settings: {
            slidesToShow: 1,
            arrows: false
          }
        }
      ]
    });

    // initialize event handling
    hamburgerMenu.on('click', () => {
      headerNav.toggle();
    });

    search.on('click', () => {
      searchContainer.css({
        'opacity': '1',
        'visibility': 'visible',
        'z-index': '100'
      });
    });

    searchContainerHide.on('click', () => {
      searchContainer.css({
        'opacity': '0',
        'visibility': 'hidden',
        'z-index': '0'
      });
    });
  });


  function clearLists() {
      // Clear all lists
      var lists = document.querySelectorAll('.item-diet ul');
      lists.forEach(function(list) {
          list.innerHTML = '';
      });
  }
    
  var ul1 = document.getElementById('list-1');
  var li1 = document.createElement("li");
  li1.innerHTML = 'Scrambled tofu with spinach and tomatoes, served with whole grain toast.';
  ul1.appendChild(li1);
  var li2 = document.createElement("li");
  li2.innerHTML = '<br>Greek yogurt topped with mixed berries and a sprinkle of chia seeds.';
  ul1.appendChild(li2);

  var ul2 = document.getElementById('list-2');
  var li3 = document.createElement("li");
  li3.innerHTML = 'Quinoa salad with mixed greens, cherry tomatoes, cucumbers, chickpeas, and a lemon-tahini dressing';
  ul2.appendChild(li3);
  var li4 = document.createElement("li");
  li4.innerHTML = '<br>Lentil soup served with a side of whole grain bread and a green salad';
  ul2.appendChild(li4);

  var ul3 = document.getElementById('list-3');
  var li5 = document.createElement("li");
  li5.innerHTML = 'Spaghetti squash with marinara sauce and a side of steamed broccoli.';
  ul3.appendChild(li5);
  var li6 = document.createElement("li");
  li6.innerHTML = '<br>Baked sweet potato topped with black beans, salsa, avocado, and a dollop of Greek yogurt.';
  ul3.appendChild(li6);
    function showVeg() {
      clearLists(); // Clear existing items before showing new ones
    
      var ul1 = document.getElementById('list-1');
      var li1 = document.createElement("li");
      li1.innerHTML = 'Scrambled tofu with spinach and tomatoes, served with whole grain toast.';
      ul1.appendChild(li1);
      var li2 = document.createElement("li");
      li2.innerHTML = '<br>Greek yogurt topped with mixed berries and a sprinkle of chia seeds.';
      ul1.appendChild(li2);
    
      var ul2 = document.getElementById('list-2');
      var li3 = document.createElement("li");
      li3.innerHTML = 'Quinoa salad with mixed greens, cherry tomatoes, cucumbers, chickpeas, and a lemon-tahini dressing';
      ul2.appendChild(li3);
      var li4 = document.createElement("li");
      li4.innerHTML = '<br>Lentil soup served with a side of whole grain bread and a green salad';
      ul2.appendChild(li4);
    
      var ul3 = document.getElementById('list-3');
      var li5 = document.createElement("li");
      li5.innerHTML = 'Spaghetti squash with marinara sauce and a side of steamed broccoli.';
      ul3.appendChild(li5);
      var li6 = document.createElement("li");
      li6.innerHTML = '<br>Baked sweet potato topped with black beans, salsa, avocado, and a dollop of Greek yogurt.';
      ul3.appendChild(li6);
    }
    
    function showNonVeg() {
      clearLists(); // Clear existing items before showing new ones
    
      var ul1 = document.getElementById('list-1');
      var li1 = document.createElement("li");
      li1.innerHTML = 'Egg white omelette with diced vegetables (bell peppers, onions, mushrooms) and a side of avocado.';
      ul1.appendChild(li1);
      var li2 = document.createElement("li");
      li2.innerHTML = '<br>Smoked salmon on whole grain toast with sliced cucumber and tomato.';
      ul1.appendChild(li2);
    
      var ul2 = document.getElementById('list-2');
      var li3 = document.createElement("li");
      li3.innerHTML = 'Grilled chicken breast served over a bed of mixed greens with quinoa, cherry tomatoes, and balsamic vinaigrette.';
      ul2.appendChild(li3);
      var li4 = document.createElement("li");
      li4.innerHTML = '<br>Turkey and avocado whole grain wrap with lettuce, tomato, and mustard.';
      ul2.appendChild(li4);
    
      var ul3 = document.getElementById('list-3');
      var li5 = document.createElement("li");
      li5.innerHTML = 'Grilled salmon or trout with roasted vegetables (asparagus, carrots, Brussels sprouts) and quinoa.';
      ul3.appendChild(li5);
      var li6 = document.createElement("li");
      li6.innerHTML = '<br>Baked chicken breast with a side of steamed green beans and a quinoa pilaf.';
      ul3.appendChild(li6);

    }

    var workoutSchedule = document.getElementById('workout-schedule');
    workoutSchedule.style.display = 'block';
        workoutSchedule.innerHTML = '<h3>3 Day Workout Split:</h3>' +
                                     '<p>Mon: Upper Body</p>' +
                                     '<p>Tue: Rest</p>' +
                                     '<p>Wed: Lower Body</p>' +
                                     '<p>Thurs: Rest</p>' +
                                     '<p>Fri: Full Body</p>' +
                                     '<p>Sat: Rest</p>' +
                                     '<p>Sun: Rest</p>';
    document.getElementById('days').addEventListener('change', function() {
      var days = parseInt(this.value);
      var workoutSchedule = document.getElementById('workout-schedule');
      // Clear previous content
      workoutSchedule.innerHTML = '';
      
      if (days === 3) {
        workoutSchedule.style.display = 'block';
        workoutSchedule.innerHTML = '<h3>3 Day Workout Split:</h3>' +
                                     '<p>Mon: Upper Body</p>' +
                                     '<p>Tue: Rest</p>' +
                                     '<p>Wed: Lower Body</p>' +
                                     '<p>Thurs: Rest</p>' +
                                     '<p>Fri: Full Body</p>' +
                                     '<p>Sat: Rest</p>' +
                                     '<p>Sun: Rest</p>';
      } else if (days === 5) {
        workoutSchedule.style.display = 'block';
        workoutSchedule.innerHTML = '<h3>5 Day Workout Split:</h3>' +
                                      '<p>Mon: back and biceps</p>' +
                                      '<p>Tue: chest and triceps</p>' +
                                      '<p>Wed: Rest</p>' +
                                      '<p>Thurs: legs</p>' +
                                      '<p>Fri: Rest</p>' +
                                      '<p>Sat: Shoulder</p>' +
                                      '<p>Sun: Arms</p>';
      } else if (days === 6) {
        workoutSchedule.style.display = 'block';
        workoutSchedule.innerHTML = '<h3>6 Day Workout Split:</h3>' +
                                          '<p>Mon: Chest and triceps</p>' +
                                          '<p>Tue: back and biceps</p>' +
                                          '<p>Wed: legs</p>' +
                                          '<p>Thurs: Chest and triceps </p>' +
                                          '<p>Fri: back and biceps</p>' +
                                          '<p>Sat: legs</p>' +
                                          '<p>Sun: Rest</p>';  
      } else {
        workoutSchedule.style.display = 'none';
      }
    });
