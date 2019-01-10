<template>
  <div>
    <div class="container-fluid mt-5">
        <div class="row justify-content-center">
          <div class="col-lg-5 pt-2">
            <div class="card bg-transparent" style="border: 3px solid; border-color:#6cb2eb;">
              <div class="card-body">
                <h3 class="card-title text-center" style="font-family: fantasy; opacity: 0.9">We give you the <span style="color:#A99905;">KEY</span> <br/>to a quality deal you deserve</h3>
                  <div class="row justify-content-center mt-5">
                    <img src="../../../public/loginIcons/medal.png" class="rounded-circle bg-info mx-3" alt="" width="128" height="128">
                    <img src="../../../public/loginIcons/shield.png" class="rounded-circle bg-info mx-3" alt="" width="128" height="128">
                    <img src="../../../public/loginIcons/product.png" class="rounded-circle bg-info mx-3" alt="" width="128" height="128">
                  </div>
              </div>
            </div>
          </div>
          <div class="col-lg-1">
          </div>
          <div class="col-lg-3 pt-2">
            <div class="card bg-secondary">
              <div class="card-body mr-3 ml-3">
                <h5 class="card-title text-center pt-3 pb-3" style="color:white;">Sign in to GetzMo</h5>
                <form>
                  <fieldset>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-user"></i></span>
                      </div>
                      <input type="email" class="form-control" placeholder="Username">
                    </div>
                    <small style="color:white">We'll never share your email with anyone else.</small>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text"><i class="fas fa-lock"></i></span>
                      </div>
                      <input type="password" class="form-control" placeholder="Password">
                    </div>
                  </fieldset>
                  <div class="row justify-content-center mt-3">
                    <button type="submit" class="btn btn-success pr-5 pl-5">Login</button>
                  </div>
                </form>
                <br/>
                <br/>
                <div class="text-center">
                  <a href="#" class="text-center" style="color:cyan;">Lost your Password?</a>
                </div>
                <hr>
                <div class="text-center">
                  <router-link :to="{ name: 'register', params: {} }" style="color:cyan;">Don't have an account yet? Register here</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-2">
             Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a>
             from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>
             is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
        </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
@import 'https://use.fontawesome.com/releases/v5.6.3/css/all.css';
</style>
