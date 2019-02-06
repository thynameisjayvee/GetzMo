<template>
    <div>
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
                        <img src="../../../public/serviceIcons/car.png" class="post-img d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../public/serviceIcons/cash.png" class="post-img d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="../../../public/serviceIcons/deal.png" class="post-img d-block w-100" alt="...">
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
                        <tbody>
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
    </div>
</template>
<style scoped>
.post-img{
  height: 400px;
}
</style>
<script>
export default {
    layout: 'profile'
}
</script>

