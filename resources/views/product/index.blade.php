@extends('app')

@section('title','Product')

@section('content')
<main class="product-index">
    <div class="cotainer">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <div class="row"> 
                            <div class="col-md-10">
                                <h3 class="pull-left"> All Product <span class="badge bg-blue">({{ $products->count() }})</span> </h3>
                            </div>
                            <div class="col-md-2">
                                <a class="btn btn-primary waves-effect pull-right" href="{{ route('product.create') }}">
                                <i class="fa fa-plus" aria-hidden="true"></i>
                                    <span>Add Product</span>
                                </a>  
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <table id="product-list" class="table table-striped table-hover dataTable js-exportable">
                            <thead>
                            <tr>
                                <th>SN</th>
                                <th>Name</th>
                                <th>Brand</th>
                                <th>Quantity</th>
                                <th>Weigt</th>
                                <th>Price</th>   
                                <th>Tag</th>   
                                <th>Date</th>
                                <th class="text-center">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($products as $key=>$product)
                                <tr>
                                    <td>{{ $key + 1 }}</td>
                                    <td>{{ $product->name }}</td>
                                    <td>{{ $product->brand }}</td>
                                    <td>{{ $product->quantity }}</td>
                                    <td>{{ $product->weight }}</td> 
                                    <td>{{ $product->price }}</td> 
                                    <td>{{ $product->tag }}</td>                                    
                                    <td>{{ $product->created_at }}</td>
                                    <td class="text-center">
                                        <a class="btn-edit" href="{{ route('product.edit',$product->id) }}">
                                            <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                                        </a>
                                        <a class="btn-delete" href="javascript: void(0)" onclick='document.getElementById("delete-form-{{ $product->id }}").submit()'>
                                        <i class="fa fa-times" aria-hidden="true"></i>
                                        </a>
                                        <form id="delete-form-{{ $product->id }}" action="{{ route('product.destroy',$product->id) }}" method="POST" style="display: none;">
                                            @csrf
                                            @method('DELETE')
                                        </form>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>
@endsection

@push('js')

    <script type="text/javascript">
        function deleteTag(id) {
            swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                confirmButtonClass: 'btn btn-success',
                cancelButtonClass: 'btn btn-danger',
                buttonsStyling: false,
                reverseButtons: true
            }).then((result) => {
                if (result.value) {
                    event.preventDefault();
                    document.getElementById('delete-form-'+id).submit();
                } else if (
                    // Read more about handling dismissals
                    result.dismiss === swal.DismissReason.cancel
                ) {
                    swal(
                        'Cancelled',
                        'Your data is safe :)',
                        'error'
                    )
                }
            })
        }
    </script>
@endpush