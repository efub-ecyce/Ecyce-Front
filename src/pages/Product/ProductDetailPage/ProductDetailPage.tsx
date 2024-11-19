import ProductImage from '../../../components/ProductDetailPage/ProductImage';

const ProductImgData = {
  reviewImg1: "",
  reviewImg2: "",
  reviewImg3: "",
  reviewImg4: "",
  reviewImg5: "",
}

const ProductDetailPage = () => {
  return (
    <>
      <ProductImage 
        reviewImg1={ProductImgData.reviewImg1}
        reviewImg2={ProductImgData.reviewImg2}
        reviewImg3={ProductImgData.reviewImg3}
        reviewImg4={ProductImgData.reviewImg4}
        reviewImg5={ProductImgData.reviewImg5}
      />
    </>
  );
};

export default ProductDetailPage;
