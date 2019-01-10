<template>
  <div>
    <div class="container-fluid bg-info bg-height">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <form>
            <fieldset class="border-settings mt-5 p-4">
              <legend class="legend-border" align="center">
                 <img src="../../../public/registerIcons/clipboard1.png" alt="">
              </legend>
              <!-- start of form 1 -->
              <div class="form-row mb-2">
                <div class="col-md-6">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-user"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="First Name">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-address-card"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Address">
                  </div>
                </div>
              </div>
              <!-- end of form 1 -->
              <div class="form-row mb-2">
                <div class="col-md-6">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-user"></i></span>
                    </div>
                    <input type="text" class="form-control" placeholder="Last Name">
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <span class="input-group-text"><i class="fas fa-envelope-square"></i></span>
                    </div>
                    <input type="email" class="form-control" placeholder="Email Address">
                  </div>
                </div>
               </div>
               <!-- end of form 2 -->
               <div class="form-row mb-2">
                 <div class="col-md-6">
                   <div class="input-group">
                     <div class="input-group-prepend">
                       <span class="input-group-text"><i class="fas fa-user"></i></span>
                     </div>
                     <input id="datepicker" placeholder="">
                   </div>
                 </div>
                 <div class="col-md-6">
                   <div class="input-group">
                     <div class="input-group-prepend">
                       <span class="input-group-text"><i class="fas fa-lock"></i></i></span>
                     </div>
                     <input type="password" class="form-control" placeholder="Password">
                   </div>
                 </div>
                </div>
                <!-- end of form 3 -->
                <div class="form-row mb-2">
                  <div class="col-md-6">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                      </div>
                      <input type="email" class="form-control" placeholder="Username">
                    </div>
                    <small style="color:white">We'll never share your email with anyone else.</small>
                  </div>
                  <div class="col-md-6">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-lock"></i></i></span>
                      </div>
                      <input type="password" class="form-control" placeholder="Password">
                    </div>
                  </div>
                 </div>
                 <!-- end of form 4 -->
                 <div class="form-row mb-2">
                   <div class="col-md-6">
                     <div class="input-group">
                       <div class="input-group-prepend">
                         <span class="input-group-text"><i class="fas fa-user"></i></span>
                       </div>
                       <input type="email" class="form-control" placeholder="Username">
                     </div>
                     <small style="color:white">We'll never share your email with anyone else.</small>
                   </div>
                   <div class="col-md-6">
                     <div class="input-group">
                       <div class="input-group-prepend">
                         <span class="input-group-text"><i class="fas fa-lock"></i></i></span>
                       </div>
                       <input type="password" class="form-control" placeholder="Password">
                     </div>
                   </div>
                  </div>
                  <!-- end of form 5 -->
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
@import 'https://unpkg.com/gijgo@1.9.11/css/gijgo.min.css';
.bg-height{
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
