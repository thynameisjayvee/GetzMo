<template>
    <div>
        <div class="container-fluid">
            <h1 class="mt-4">Sell a Car</h1>
            <hr>
            <!-- MultiStep Form -->
            <div class="row">
                <div class="col-md-12 col-md-offset-3">
                    <form id="msform">
                        <!-- progressbar -->
                        <ul id="progressbar">
                            <li class="active">General Information</li>
                            <li>Social Profiles</li>
                            <li>Account Setup</li>
                        </ul>
                        <!-- fieldsets -->
                        <fieldset>
                            <h2 class="fs-title">General Information</h2>
                            <h3 class="fs-subtitle">STEP 1</h3>
                            <div class="row">
                                <div class="col-lg-6">
                                    <label for="">Brand</label>
                                    <input type="text" class="form-control" list="brand_list" placeholder="Any Brand">
                                    <datalist id="brand_list">
                                        <option>BMW</option>
                                    </datalist>
                                    <label for="">Model</label>
                                    <input type="text" class="form-control" list="model_list" placeholder="Any Model">
                                    <datalist id="model_list">
                                        <option>MR</option>
                                    </datalist>
                                    <label for="">Production Year</label>
                                    <input type="text" class="form-control" list="year_list" placeholder="Any Year">
                                    <datalist id="year_list">
                                        <option>2003</option>
                                    </datalist>
                                    <label for="">Color</label>
                                    <input type="text" class="form-control" list="color_list" placeholder="Any Color">
                                    <datalist id="color_list">
                                        <option>Red</option>
                                    </datalist>
                                </div>
                                <div class="col-lg-6">
                                    <label for="">Mileage</label>
                                    <input type="text" class="form-control" placeholder="Any Mileage">
                                    <label for="">Selling Price</label>
                                    <input type="text" class="form-control" placeholder="Any Price">
                                </div>
                            </div>
                            <!-- <input type="text" name="fname" placeholder="First Name"/>
                            <input type="text" name="lname" placeholder="Last Name"/>
                            <input type="text" name="phone" placeholder="Phone"/> -->
                            <div align="center">
                                <input type="button" name="next" class="next action-button" value="Next"/>
                            </div>
                        </fieldset>
                        <fieldset>
                            <h2 class="fs-title">Car Details</h2>
                            <h3 class="fs-subtitle">STEP 2</h3>
                            <div class="row">
                                <div class="col-lg-4">
                                    <input type="text" class="form-control" list="transmission_list" placeholder="Transmission">
                                    <datalist id="transmission_list">
                                        <option>Automatic</option>
                                        <option>Manual</option>
                                    </datalist>
                                    <input type="text" class="form-control" list="fuel_list" placeholder="Fuel Type">
                                    <datalist id="fuel_list">
                                        <option>Diesel</option>
                                        <option>Gasoline</option>
                                    </datalist>
                                    <input type="text" class="form-control" list="condition_list" placeholder="Condition">
                                    <datalist id="condition_list">
                                        <option>Brand New</option>
                                        <option>2nd Hand</option>
                                    </datalist>
                                    <input type="text" class="form-control" placeholder="Engine (L)">
                                    <input type="text" class="form-control" placeholder="Horsepower (Hp)">
                                    <!-- <div class="input-group">
                                        <label class="radio-inline">
                                            <input type="radio" name="window_tint_opts" id="opt_1">Less than 30%
                                        </label>
                                        <label class="radio-inline">
                                            <input type="radio" name="window_tint_opts" id="opt_2">More than 30%
                                        </label>
                                    </div> -->
                                    <div align="center" class="py-2" style="border: 1px solid #dadad4;">
                                        <h4>Window Tint</h4>
                                        <label for="opt_1">Less than 30%</label>
                                        <input class="radio_width" type="radio" name="window_tint_opts" id="opt_1">
                                        <label for="opt_2">More than 30%</label>
                                        <input class="radio_width" type="radio" name="window_tint_opts" id="opt_2">
                                        <!-- <label>
                                            <input class="radio_width" type="radio" name="window_tint_opts" id="opt_1">Less than 30%
                                        </label> -->
                                        <!-- <label>
                                            <input class="radio_width" type="radio" name="window_tint_opts" id="opt_2">More than 30%
                                        </label> -->
                                    </div>
                                    <!-- <div class="custom_display">
                                        <div class="form-check">
                                            <input class="form-check-input radio_width" type="radio" name="window_tint_opts" id="opt_1" value="">
                                            <label class="form-check-label mr-2" for="opt_1">Less than 30%</label>
                                        </div>
                                        <div class="form-check">
                                            <input class="form-check-input radio_width" type="radio" name="window_tint_opts" id="opt_2" value="">
                                            <label class="form-check-label" for="opt_2">More than 30%</label>
                                        </div>
                                    </div> -->
                                </div>
                                <div class="col-lg-4">

                                </div>
                                <div class="col-lg-4">

                                </div>
                            </div>
                            <div align="center">
                                <input type="button" name="previous" class="previous action-button-previous" value="Previous"/>
                                <input type="button" name="next" class="next action-button" value="Next"/>
                            </div>
                        </fieldset>
                        <fieldset>
                            <h2 class="fs-title">Create your account</h2>
                            <h3 class="fs-subtitle">Fill in your credentials</h3>
                            <input type="text" name="email" placeholder="Email"/>
                            <input type="password" name="pass" placeholder="Password"/>
                            <input type="password" name="cpass" placeholder="Confirm Password"/>
                            <div align="center">
                                <input type="button" name="previous" class="previous action-button-previous" value="Previous"/>
                                <input type="submit" name="submit" class="submit action-button" value="Submit"/>
                            </div>
                        </fieldset>
                    </form>
                    <!-- link to designify.me code snippets -->
                    <!-- <div class="dme_link">
                        <p><a href="http://designify.me/code-snippets-js/" target="_blank">More Code Snippets</a></p>
                    </div> -->
                    <!-- /.link to designify.me code snippets -->
                </div>
            </div>
            <!-- /.MultiStep Form -->
        </div>
    </div>
</template>
<style scoped>
/*basic reset*/
/* * {
    margin: 0;
    padding: 0;
} */

/* html { */
    /* height: 100%; */
    /* background: #6441A5; fallback for old browsers */
    /* background: -webkit-linear-gradient(to left, #6441A5, #2a0845); Chrome 10-25, Safari 5.1-6 */
/* } */

/* body {
    font-family: montserrat, arial, verdana;
    background: transparent;
} */
/*form styles*/
.custom_display{
    display: inline-flex;
    width: 100%;
}

.radio_width{
    /* position: absolute; */
    /* margin-top: 0.3rem; */
    margin-left: 0.25rem;
    margin-right: 0.25rem;
    width: auto !important;
}

#msform {
    /* text-align: center; */
    position: relative;
    margin-top: 30px;
}

#msform fieldset {
    background: white;
    border: 0 none;
    border-radius: 0px;
    box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.4);
    padding: 20px 30px;
    box-sizing: border-box;
    width: 80%;
    margin: 0 10%;

    /*stacking fieldsets above each other*/
    position: relative;
}

/*Hide all except first fieldset*/
#msform fieldset:not(:first-of-type) {
    display: none;
}

/*inputs*/
#msform input, #msform textarea {
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 0px;
    margin-bottom: 10px;
    width: 100%;
    box-sizing: border-box;
    font-family: montserrat;
    color: #2C3E50;
    font-size: 13px;
}

#msform input:focus, #msform textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid rgb(106, 228, 187);
    outline-width: 0;
    transition: All 0.5s ease-in;
    -webkit-transition: All 0.5s ease-in;
    -moz-transition: All 0.5s ease-in;
    -o-transition: All 0.5s ease-in;
}

/*buttons*/
#msform .action-button {
    width: 100px;
    background: rgb(106, 228, 187);
    font-weight: bold;
    color: white;
    border: 0 none;
    border-radius: 25px;
    cursor: pointer;
    padding: 10px 5px;
    margin: 10px 5px;
}

#msform .action-button:hover, #msform .action-button:focus {
    box-shadow: 0 0 0 2px white, 0 0 0 3px rgb(106, 228, 187);
}

#msform .action-button-previous {
    width: 100px;
    background: #C5C5F1;
    font-weight: bold;
    color: white;
    border: 0 none;
    border-radius: 25px;
    cursor: pointer;
    padding: 10px 5px;
    margin: 10px 5px;
}

#msform .action-button-previous:hover, #msform .action-button-previous:focus {
    box-shadow: 0 0 0 2px white, 0 0 0 3px #C5C5F1;
}

/*headings*/
.fs-title {
    text-align: center;
    font-size: 18px;
    text-transform: uppercase;
    color: #2C3E50;
    margin-bottom: 10px;
    letter-spacing: 2px;
    font-weight: bold;
}

.fs-subtitle {
    text-align: center;
    font-weight: normal;
    font-size: 13px;
    color: #666;
    margin-bottom: 20px;
}

/*progressbar*/
#progressbar {
    text-align: center;
    margin-bottom: 30px;
    overflow: hidden;
    /*CSS counters to number the steps*/
    counter-reset: step;
}

#progressbar li {
    list-style-type: none;
    color: white;
    text-transform: uppercase;
    font-size: 9px;
    width: 33.33%;
    float: left;
    position: relative;
    letter-spacing: 1px;
}

#progressbar li:before {
    content: counter(step);
    counter-increment: step;
    width: 24px;
    height: 24px;
    line-height: 26px;
    display: block;
    font-size: 12px;
    color: #333;
    background: white;
    border-radius: 25px;
    margin: 0 auto 10px auto;
}

/*progressbar connectors*/
#progressbar li:after {
    content: '';
    width: 100%;
    height: 2px;
    background: white;
    position: absolute;
    left: -50%;
    top: 9px;
    z-index: -1; /*put it behind the numbers*/
}

#progressbar li:first-child:after {
    /*connector not needed before the first step*/
    content: none;
}

/*marking active/completed steps green*/
/*The number of the step and the connector before it = green*/
#progressbar li.active:before, #progressbar li.active:after {
    background: rgb(106, 228, 187);
    color: white;
}


/* Not relevant to this form */
.dme_link {
    margin-top: 30px;
    text-align: center;
}
.dme_link a {
    background: #FFF;
    font-weight: bold;
    color: rgb(106, 228, 187);
    border: 0 none;
    border-radius: 25px;
    cursor: pointer;
    padding: 5px 25px;
    font-size: 12px;
}

.dme_link a:hover, .dme_link a:focus {
    background: #C5C5F1;
    text-decoration: none;
}
</style>

<script>
export default {
    data(){
        return {

        }
    },
    async created(){
    
    },
    mounted(){
        //jQuery time
        var current_fs, next_fs, previous_fs; //fieldsets
        var left, opacity, scale; //fieldset properties which we will animate
        var animating; //flag to prevent quick multi-click glitches

        $(".next").click(function(){
            if(animating) return false;
            animating = true;
            
            current_fs = $(this).closest("fieldset");
            next_fs = $(this).closest("fieldset").next();
            
            //activate next step on progressbar using the index of next_fs
            $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
            
            //show the next fieldset
            next_fs.show(); 
            //hide the current fieldset with style
            current_fs.animate({opacity: 0}, {
                step: function(now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale current_fs down to 80%
                    scale = 1 - (1 - now) * 0.2;
                    //2. bring next_fs from the right(50%)
                    left = (now * 50)+"%";
                    //3. increase opacity of next_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({
                'transform': 'scale('+scale+')',
                'position': 'absolute'
            });
                    next_fs.css({'left': left, 'opacity': opacity});
                }, 
                duration: 800, 
                complete: function(){
                    current_fs.hide();
                    animating = false;
                }, 
                //this comes from the custom easing plugin
                // easing: 'easeInOutBack'
            });
        });

        $(".previous").click(function(){
            if(animating) return false;
            animating = true;
            
            current_fs = $(this).closest("fieldset");
            previous_fs = $(this).closest("fieldset").prev();
            
            //de-activate current step on progressbar
            $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
            
            //show the previous fieldset
            previous_fs.show(); 
            //hide the current fieldset with style
            current_fs.animate({opacity: 0}, {
                step: function(now, mx) {
                    //as the opacity of current_fs reduces to 0 - stored in "now"
                    //1. scale previous_fs from 80% to 100%
                    scale = 0.8 + (1 - now) * 0.2;
                    //2. take current_fs to the right(50%) - from 0%
                    left = ((1-now) * 50)+"%";
                    //3. increase opacity of previous_fs to 1 as it moves in
                    opacity = 1 - now;
                    current_fs.css({'left': left});
                    previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
                }, 
                duration: 800, 
                complete: function(){
                    current_fs.hide();
                    animating = false;
                }, 
                //this comes from the custom easing plugin
                // easing: 'easeInOutBack'
            });
        });

        $(".submit").click(function(){
            return false;
        })
    }
}
</script>
