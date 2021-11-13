@extends('app')

@section('title','Add Product')

@section('content')
<main class="product-add">
    <div class="cotainer">
        <div class="row justify-content-center">
            <div class="col-md-4">
                <div class="card">
                    <h3 class="card-header text-center">Add Product</h3>
                    <div class="card-body">
                        <form method="POST"  action="{{ route('product.store') }}" enctype="multipart/form-data">
                            @csrf
                            <div class="form-group mb-3">
                                <input type="text" placeholder="Product Name" id="name" class="form-control" name="name" required
                                    autofocus>
                                @if ($errors->has('name'))
                                <span class="text-danger">{{ $errors->first('name') }}</span>
                                @endif
                            </div>

                            <div class="form-group mb-3">
                                <input type="text" placeholder="brand" id="brand" class="form-control" name="brand" required>
                                @if ($errors->has('brand'))
                                <span class="text-danger">{{ $errors->first('brand') }}</span>
                                @endif
                            </div>

                            <div class="form-group mb-3">
                                <input type="text" placeholder="quantity" id="quantity" class="form-control" name="quantity" required>
                                @if ($errors->has('quantity'))
                                <span class="text-danger">{{ $errors->first('quantity') }}</span>
                                @endif
                            </div> 
                            
                            <div class="form-group mb-3">
                                <input type="file" id="image" class="form-control" name="image" required>
                                @if ($errors->has('image'))
                                <span class="text-danger">{{ $errors->first('image') }}</span>
                                @endif
                            </div>
                            
                            <div class="form-group mb-3">
                                <input type="text" placeholder="weight" id="weight" class="form-control" name="weight" required>
                                @if ($errors->has('weight'))
                                <span class="text-danger">{{ $errors->first('weight') }}</span>
                                @endif
                            </div> 
                            
                            <div class="form-group mb-3">
                                <input type="text" placeholder="price" id="price" class="form-control" name="price" required>
                                @if ($errors->has('price'))
                                <span class="text-danger">{{ $errors->first('price') }}</span>
                                @endif
                            </div>
                            
                            <div class="form-group mb-3">
                                <input type="text" placeholder="tag" id="tag" class="form-control" name="tag" required>
                                @if ($errors->has('tag'))
                                <span class="text-danger">{{ $errors->first('tag') }}</span>
                                @endif
                            </div>                            

                            <div class="d-grid mx-auto">
                                <button type="submit" class="btn btn-dark btn-block">Submit</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
@endsection