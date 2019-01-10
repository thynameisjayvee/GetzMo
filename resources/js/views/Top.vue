<template>
  <div>
    <div class="container-fluid" id="top-background-img">
      <div class="row justify-content-center pb-5">
        <div class="col-lg-5" id="col-position" style="">
          <div class="card bg-dark">
            <div class="card-body">
              <h5 class="card-title" style="color:white;">Search Car</h5>
              <hr style="border-color: gray;">
              <form>
                <fieldset class="form-group">
                  <div class="row">
                    <div class="col-lg-4 pb-1">
                      <select class="form-control">
                        <option>Any Brand</option>
                      </select>
                    </div>
                    <div class="col-lg-4 pb-1">
                      <select class="form-control">
                        <option>Any Model</option>
                      </select>
                    </div>
                    <div class="col-lg-4 pb-1">
                      <select class="form-control">
                        <option>Any Color</option>
                      </select>
                    </div>
                  </div>
                </fieldset>
                <fieldset class="form-group">
                  <div class="row">
                    <div class="col-lg-4 pb-1">
                      <select class="form-control">
                        <option>City</option>
                      </select>
                    </div>
                    <div class="col-lg-4 pb-1">
                      <select class="form-control">
                        <option>Province</option>
                      </select>
                    </div>
                    <div class="col-lg-4 pb-1">
                      <input type="text" class="form-control" placeholder="Zip Code">
                    </div>
                  </div>
                </fieldset>
                <button type="submit" class="btn btn-primary">Search</button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-1">
        </div>
        <div class="col-lg-4">
        </div>
      </div>
    </div>
    <!-- end of first container -->
    <div class="container-fluid mt-3">
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <h4>Service Panels</h4>
          <hr>
          <div class="row">
            <div class="col-md-3">
              <div class="card m-5">
                <img class="card-img-top p-3" src="../../../public/serviceIcons/sellCar.png" alt="">
              </div>
            </div>
            <div class="col-md-3">
              <div class="card m-5">
                <img class="card-img-top p-3" src="../../../public/serviceIcons/cash.png" alt="">
              </div>
            </div>
            <div class="col-md-3">
              <div class="card m-5">
                <img class="card-img-top p-3" src="../../../public/serviceIcons/deal1.png" alt="">
              </div>
            </div>
            <div class="col-md-3">
              <div class="card m-5">
                <img class="card-img-top p-3" src="../../../public/serviceIcons/car1.png" alt="">
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
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
#top-background-img{
  background-image: url('../../../public/getzMoBG.jpg');
  background-size: cover;
  background-position: center;
}
#col-position{
  margin-top: 50px;
  margin-bottom: 50px;
}

#serviceIcon-bg-color{
  background-color: blue;
}
#serviceIcon-size{
  width: 256px;
}
</style>
