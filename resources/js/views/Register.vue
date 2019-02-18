<template>
  <div>
    <div id="header-bg">

    </div>
    <div class="container-fluid this-position">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <form>
            <fieldset class="border-settings mt-5 p-4 mb-3">
              <legend class="legend-border mb-4" align="center">
                 <img src="../../../public/registerIcons/clipboard1.png" alt="">
              </legend>
              <!-- start of form 1 -->
              <div class="form-row mb-2">
                <div class="col-md-6 mb-2">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-user"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="First Name">
                  </div>
                </div>
                <div class="col-md-6 mb-2">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-user"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Last Name">
                  </div>
                </div>
              </div>
              <!-- end of form 1 -->
              <div class="form-row mb-2">
                <div class="col-md-6 pb-2">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-address-card"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Address">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-envelope-square"></i></span>
                    </div>
                    <input type="email" class="form-control" placeholder="Email Address">
                  </div>
                  <small style="color:white">We'll never share your email with anyone else.</small>
                </div>
               </div>
               <!-- end of form 2 -->
               <div class="form-row mb-2">
                 <div class="col-md-6 mb-2">
                   <div class="input-group">
                    <div class="input-group-prepend mr-2">
                      <span class="input-group-text"><i class="fas fa-user"></i></span>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1">
                      <label class="form-check-label" for="inlineRadio1">Male</label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2">
                      <label class="form-check-label" for="inlineRadio2">Female</label>
                    </div>
                   </div>
                 </div>
                 <div class="col-md-6 mb-2">
                   <div class="input-group">
                     <div class="input-group-prepend">
                       <span class="input-group-text"><i class="fas fa-user"></i></span>
                     </div>
                     <input type="text" class="form-control" placeholder="Username">
                   </div>
                 </div>
                </div>
                <!-- end of form 3 -->
                <div class="form-row mb-4">
                  <div class="col-md-6 mb-2">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-lock"></i></span>
                      </div>
                      <input type="password" class="form-control" placeholder="Password">
                    </div>
                  </div>
                  <div class="col-md-6 mb-2">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-lock"></i></span>
                      </div>
                      <input type="password" class="form-control" placeholder="Confirm Password">
                    </div>
                  </div>
                 </div>
                 <!-- end of form 4 -->
                 <div class="row justify-content-center">
                   <div class="col-md-6" align="center">
                     <button type="button" class="btn btn-primary mb-1">Register</button>
                     <button type="button" class="btn btn-danger mb-1">Clear</button>
                   </div>
                 </div>
                 <div class="row justify-content-center mt-4">
                   <div class="col-md-6" align="center">
                     <router-link :to="{ name: 'login', params: {} }">Already have an account? Login Here</router-link>
                   </div>
                 </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
/* @import 'https://unpkg.com/gijgo@1.9.11/css/gijgo.min.css'; */
.this-position{
  margin-top: -180px;
}
#header-bg{
  background-image: linear-gradient(#6cb2eb, #f8f9fa);
  background-size: contain;
  height: 180px;
}
.border-settings{
  /* border: 2px solid; */
  border-radius: 1rem;
  background-color: #DADAD4;
}
.legend-border{
  /* width:inherit; /* Or auto */
  /* padding:0 10px; /* To give a bit of padding on the left and right */
  /* border-bottom:none; */
}

</style>
