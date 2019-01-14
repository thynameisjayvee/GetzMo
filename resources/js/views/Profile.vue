<template>
  <div>
    <div class="img-bg">

    </div>
    <div class="container-fluid this-position">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <fieldset class="border-settings mt-5 pb-4 px-4">
            <legend align="center"><img src="../../../public/serviceIcons/cash.png" alt="" class="rounded-circle prof-img-resize mb-2"></legend>
            <h4 class="text-center">Jayvee</h4>
            <h6 class="text-center">Paknaan, Mandaue City, Cebu 6000</h6>
            <hr>
            <div class="form-group">
              <div align="right">
                <button id="editButton" type="button" class="btn btn-primary btn-sm mb-1" @click="startEdit">Edit</button>
              </div>
              <textarea class="form-control text-center" id="textAreas" rows="3" placeholder="A simple description of yourself" disabled></textarea>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <fieldset class="border-settings mt-5 py-2 px-4">
            <b-tabs content-class="this-content">
              <!-- start of tab 1 /////////////////////////////////////////////////////////////////////////////////////// -->
              <b-tab title="Post" title-item-class="ml-2 this-tab-border" active>
                <div class="container-fluid py-3">
                  <div align="center">
                    <button type="button" name="button" class="btn btn-success" style="width:100%;">Post a car</button>
                  </div>
                </div>
                <!-- start of PostBody ///////////////////////////////////////////////////////////////////////////////// -->
                <div class="container-fluid pb-3">
                  <div style="border:3px solid; border-radius: 0.5rem; border-color: gray;">
                    <div class="row">
                      <div class="col-md-6 p-3">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                          <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                          </ol>
                          <div class="carousel-inner">
                            <div class="carousel-item active">
                              <img src="../../../public/serviceIcons/car.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                              <img src="../../../public/serviceIcons/cash.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                              <img src="../../../public/serviceIcons/deal.png" class="d-block w-100" alt="...">
                            </div>
                          </div>
                          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                          </a>
                          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                          </a>
                        </div>
                      </div>
                      <div class="col-md-6 py-3">
                        <h4 class="m-2">Toyota Something</h4>
                        <div class="m-2">
                          <table class="table">
                                <tr>
                                  <th scope="row" width="50%">Year:</th>
                                  <td class="text-right" width="50%">2005</td>
                                </tr>
                                <tr>
                                  <th scope="row" width="50%">Odometer:</th>
                                  <td class="text-right" width="50%">5000</td>
                                </tr>
                                <tr>
                                  <th scope="row" width="50%">Owner:</th>
                                  <td class="text-right" width="50%">1st owner</td>
                                </tr>
                                <tr>
                                  <th scope="row" width="50%">For:</th>
                                  <td class="text-right" width="50%">Sale or Swap</td>
                                </tr>
                                <tr>
                                  <th scope="row" width="50%">Price:</th>
                                  <td class="text-right" width="50%">9999999</td>
                                </tr>
                              </tbody>
                            </table>
                        </div>
                        <button type="button" class="btn btn-success">Edit</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end of postbody //////////////////////////////////////////////////////////////////////////////////////// -->
                <!-- start of PostBody ///////////////////////////////////////////////////////////////////////////////// -->
                <div class="container-fluid pb-3">
                  <div style="border:3px solid; border-radius: 0.5rem; border-color: gray;">
                    <div class="row">
                      <div class="col-md-6 p-3">
                        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                          <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                          </ol>
                          <div class="carousel-inner">
                            <div class="carousel-item active">
                              <img src="../../../public/serviceIcons/car.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                              <img src="../../../public/serviceIcons/cash.png" class="d-block w-100" alt="...">
                            </div>
                            <div class="carousel-item">
                              <img src="../../../public/serviceIcons/deal.png" class="d-block w-100" alt="...">
                            </div>
                          </div>
                          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                          </a>
                          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                          </a>
                        </div>
                      </div>
                      <div class="col-md-6 py-3">
                        <h4 class="m-2">Toyota Something</h4>
                        <div class="m-2">
                          <table class="table">
                                <tr>
                                  <th scope="row" width="50%">Year:</th>
                                  <td class="text-right" width="50%">2005</td>
                                </tr>
                                <tr>
                                  <th scope="row" width="50%">Odometer:</th>
                                  <td class="text-right" width="50%">5000</td>
                                </tr>
                                <tr>
                                  <th scope="row" width="50%">Owner:</th>
                                  <td class="text-right" width="50%">1st owner</td>
                                </tr>
                                <tr>
                                  <th scope="row" width="50%">For:</th>
                                  <td class="text-right" width="50%">Sale or Swap</td>
                                </tr>
                                <tr>
                                  <th scope="row" width="50%">Price:</th>
                                  <td class="text-right" width="50%">9999999</td>
                                </tr>
                              </tbody>
                            </table>
                        </div>
                        <button type="button" class="btn btn-success">Edit</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- end of postbody //////////////////////////////////////////////////////////////////////////////////////// -->
              </b-tab>
              <!-- END OF tab1 //////////////////////////////////////////////////////////////////////////////////////// -->
              <b-tab title="Messages" >
                <br>I'm the second tab content
              </b-tab>
              <b-tab title="Deals">
                <br>Disabled tab!
              </b-tab>
              <b-tab title="My Garage" >
                <br>I'm the second tab content
              </b-tab>
              <b-tab title="Update Profile">
                <br>Disabled tab!
              </b-tab>
            </b-tabs>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods : {
    startEdit(){
      var checkStatus = document.getElementById("editButton").innerHTML;
      if(checkStatus == 'Edit'){
        document.getElementById("editButton").innerHTML = "Save"
        $("#textAreas").prop('disabled', false);
      } else {
        document.getElementById("editButton").innerHTML = "Edit"
        $("#textAreas").prop('disabled', true);
      }
    }
  }
}
</script>

<style>
.this-lg-bg{
  background-color: #f8fafc;
}

.this-content{
  background-color: #f8fafc;
}

.nav-tabs{
  border-bottom: 1px solid black;
}

.nav-tabs .nav-link:hover,.nav-tabs .nav-link:focus{
  border: 1px solid black;
  border-bottom: 1px solid #f8fafc;
}

.nav-link.active{
  border:1px solid black !important;
  border-bottom: 1px solid #f8fafc !important;
}

.this-position{
  margin-top: -180px;
}
.img-bg{
  background-image: linear-gradient(#6cb2eb, #f8f9fa);
  background-size: contain;
  height: 180px;
}
.prof-img-resize{
  height: 128px;
  width: 128px;
  border: 5px solid;
  color: lightblue;
  background-color: lightblue;
}
.border-settings{
  /* border: 2px solid; */
  border-radius: 1rem;
  background-color: #DADAD4;
}
</style>
