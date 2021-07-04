import React, {
  PureComponent,
  useState,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { Background, CloseModalButton } from '../Modal/Modal';
import '../Modal/Modal.css';
import '../PreferenceModal/PreferenceModal.css';
import '../NewProfile/NewProfile.css';
import '../Editprofile/EditModal.css';
import '../Editprofile/ExperienceModal.css';
import './ProfileImageModal.css';
import { BsPerson } from 'react-icons/bs';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

class ImageUploader extends PureComponent {
  state = {
    src: null,
    crop: {
      unit: '%',
      width: 30,
      aspect: 16 / 16,
      borderRadius: 90,
    },
  };
  //   componentDidMount() {
  //     if (this.props.Reader) this.setState({ src: this.props.Reader.result });
  //   }

  onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      this.props.setPage(2);
      reader.addEventListener('load', () =>
        this.setState({ src: reader.result })
      );

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  // If you setState the crop in here you should return false.
  onImageLoaded = (image) => {
    this.imageRef = image;
  };

  onCropComplete = (crop) => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop, percentCrop) => {
    // You could also use percentCrop:
    // this.setState({ crop: percentCrop });
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        'newFile.jpeg'
      );
      this.setState({ croppedImageUrl });
      this.props.setImageFile(croppedImageUrl);
    }
  }

  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement('canvas');
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext('2d');

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error('Canvas is empty');
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
      }, 'image/jpeg');
    });
  }

  render() {
    const { crop, croppedImageUrl, src } = this.state;

    return (
      <div className='App'>
        <div>
          <input
            type='file'
            className='not-required'
            ref={this.props.fileInputRef}
            accept='image/*'
            onChange={this.onSelectFile}
          />
        </div>
        {src && (
          <ReactCrop
            src={src}
            crop={crop}
            ruleOfThirds
            circularCrop={true}
            onImageLoaded={this.onImageLoaded}
            onComplete={this.onCropComplete}
            onChange={this.onCropChange}
          />
        )}
        {/* {croppedImageUrl && <img alt='Crop' style={{}} src={croppedImageUrl} />} */}
        <button
          className='crop-btn'
          onClick={() => {
            this.props.setPage(1);
          }}
        >
          Crop & Save
        </button>
      </div>
    );
  }
}

const ProfileImageModal = ({ showModal, setShowModal, scrollRemove, save }) => {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      scrollRemove();
      setPage(1);
    }
  };
  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        scrollRemove();
        this.props.setPage(1);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );
  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);
  const [src, setSrc] = useState(null);
  const [crop, setCrop] = useState({
    unit: '%',
    width: 30,
    aspect: 16 / 16,
    borderRadius: 90,
  });
  const [croppedImageUrl, setCroppedImageUrl] = useState('');
  const [imageRef, setImageRef] = useState('');
  const [fileUrl, setFileUrl] = useState('');

  const fileInputRef = useRef();
  const [Reader, setReader] = useState(null);
  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      //   console.log('reader.result', reader.result);
      reader.addEventListener('load', () => setSrc(reader.result));
      reader.readAsDataURL(e.target.files[0]);
      setReader(reader);
    }
  };

  console.log(croppedImageUrl);

  //   const getCroppedImg = (image, crop, fileName) => {
  //     const canvas = document.createElement('canvas');
  //     const scaleX = image.naturalWidth / image.width;
  //     const scaleY = image.naturalHeight / image.height;
  //     canvas.width = crop.width;
  //     canvas.height = crop.height;
  //     const ctx = canvas.getContext('2d');

  //     ctx.drawImage(
  //       image,
  //       crop.x * scaleX,
  //       crop.y * scaleY,
  //       crop.width * scaleX,
  //       crop.height * scaleY,
  //       0,
  //       0,
  //       crop.width,
  //       crop.height
  //     );

  //     return new Promise((resolve, reject) => {
  //       canvas.toBlob((blob) => {
  //         if (!blob) {
  //           //reject(new Error('Canvas is empty'));
  //           console.error('Canvas is empty');
  //           return;
  //         }
  //         blob.name = fileName;
  //         window.URL.revokeObjectURL(fileUrl);
  //         setFileUrl(window.URL.createObjectURL(blob));
  //         resolve(fileUrl);
  //       }, 'image/jpeg');
  //     });
  //   };
  const [page, setPage] = useState(1);
  const [imageFile, setImageFile] = useState(null);
  useEffect(() => {
    if (imageFile) setPage(2);
    console.log('imageFile', imageFile);
  }, [imageFile]);
  useEffect(() => {
    console.log('page', page);
  }, [page]);
  return (
    <>
      {showModal ? (
        <Background
          className='newbg background'
          onClick={closeModal}
          ref={modalRef}
        >
          <div
            className='ModalWrapper Modal__Fullscreen experience__modal elevation '
            showModal={showModal}
          >
            <div className='preference__modal__container container'>
              <div class='preference__modal__header modal-heading-user'>
                <svg
                  class='MuiSvgIcon-root'
                  focusable='false'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                  onClick={() => {
                    scrollRemove();
                    setShowModal(false);
                    setPage(1);
                  }}
                >
                  <path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
                </svg>
                <button
                  onClick={() => {
                    scrollRemove();
                    setShowModal(false);
                    save(imageFile);
                  }}
                >
                  Save
                </button>
              </div>
              <div className={page == 1 ? `show` : `no-show`}>
                <h5 class='exp profile-image-heading'>Edit Profile Photo</h5>
                <div
                  className='edit-profile-picture'
                  onClick={
                    !imageFile
                      ? () => {
                          fileInputRef.current && fileInputRef.current.click();
                          // setPage(2);
                        }
                      : null
                  }
                >
                  {imageFile ? (
                    <>
                      <div className='after-crop'>
                        <img src={imageFile}></img>
                        <div className='edit-options'>
                          <p
                            onClick={() => {
                              fileInputRef.current &&
                                fileInputRef.current.click();
                            }}
                          >
                            Replace
                          </p>
                          <p onClick={() => setImageFile(null)}>Delete</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <BsPerson />
                      <p>
                        Drag and drop your photo or <span>browse</span>
                      </p>
                    </>
                  )}
                  {/* <div>
                      <input
                      type='file'
                      ref={fileInputRef}
                      className='not-required'
                      accept='image/*'
                      onChange={onSelectFile}
                      />
                    </div> */}
                </div>
              </div>
              <div className={page == 2 ? `show` : `no-show`}>
                <ImageUploader
                  fileInputRef={fileInputRef}
                  Reader={Reader}
                  setPage={setPage}
                  setImageFile={setImageFile}
                />
              </div>

              {/* <div>
                <input type='file' accept='image/*' onChange={onSelectFile} />
              </div> */}
              {/* {src && (
                <ReactCrop
                  src={src}
                  crop={crop}
                  ruleOfThirds
                  circularCrop={true}
                  onImageLoaded={onImageLoaded}
                  onComplete={onCropComplete}
                  onChange={onCropChange}
                />
              )}
              {croppedImageUrl && (
                <img alt='Crop' style={{}} src={croppedImageUrl.blob} />
              )} */}
            </div>
          </div>
        </Background>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProfileImageModal;
