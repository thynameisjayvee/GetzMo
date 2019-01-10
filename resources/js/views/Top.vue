<template>
  <div class="container-fluid" id="top-background-img">
    <div class="row justify-content-center">
      <div class="col-lg-5" id="col-position" style="">
        <div class="card bg-dark">
          <div class="card-body">
            <h5 class="card-title" style="color:white;">Search Car</h5>
            <hr style="border-color: gray;">
            <form>
              <fieldset class="form-group">
                <div class="row">
                  <div class="col-lg-4">
                    <select class="form-control">
                      <option>Any Brand</option>
                    </select>
                  </div>
                  <div class="col-lg-4">
                    <select class="form-control">
                      <option>Any Model</option>
                    </select>
                  </div>
                  <div class="col-lg-4">
                    <select class="form-control">
                      <option>Any Color</option>
                    </select>
                  </div>
                </div>
              </fieldset>
              <fieldset class="form-group">
                <div class="row">
                  <div class="col-lg-4">
                    <select class="form-control">
                      <option>City</option>
                    </select>
                  </div>
                  <div class="col-lg-4">
                    <select class="form-control">
                      <option>Province</option>
                    </select>
                  </div>
                  <div class="col-lg-4">
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
</style>
