export default function FilterForm({ locations, update, allProperties }) {
  const testObj = {
    data: [
      {
        id: 1,
        attributes: {
          name: "Casa Cuixa",
          description:
            "Casa Cuixa del Cielo is a unique 6 bedrooms oceanfront private villa, featuring stunning en-suite bathrooms, perfect to accommodate up to 16 guests",
          createdAt: "2022-07-19T11:57:13.173Z",
          updatedAt: "2022-08-02T12:20:40.962Z",
          publishedAt: "2022-07-20T12:00:19.465Z",
          bedrooms: 5,
          occupation: 10,
          slug: "casa-cuixa",
          bathrooms: 2,
          profilepic: {
            data: {
              id: 1,
              attributes: {
                name: "IMG_0917.jpg",
                alternativeText: "IMG_0917.jpg",
                caption: "IMG_0917.jpg",
                width: 5760,
                height: 3840,
                formats: {
                  thumbnail: {
                    name: "thumbnail_IMG_0917.jpg",
                    hash: "thumbnail_IMG_0917_b06f9f19e1",
                    ext: ".jpg",
                    mime: "image/jpeg",
                    path: null,
                    width: 234,
                    height: 156,
                    size: 9.26,
                    url: "/uploads/thumbnail_IMG_0917_b06f9f19e1.jpg",
                  },
                  large: {
                    name: "large_IMG_0917.jpg",
                    hash: "large_IMG_0917_b06f9f19e1",
                    ext: ".jpg",
                    mime: "image/jpeg",
                    path: null,
                    width: 1000,
                    height: 667,
                    size: 121.05,
                    url: "/uploads/large_IMG_0917_b06f9f19e1.jpg",
                  },
                  medium: {
                    name: "medium_IMG_0917.jpg",
                    hash: "medium_IMG_0917_b06f9f19e1",
                    ext: ".jpg",
                    mime: "image/jpeg",
                    path: null,
                    width: 750,
                    height: 500,
                    size: 72.33,
                    url: "/uploads/medium_IMG_0917_b06f9f19e1.jpg",
                  },
                  small: {
                    name: "small_IMG_0917.jpg",
                    hash: "small_IMG_0917_b06f9f19e1",
                    ext: ".jpg",
                    mime: "image/jpeg",
                    path: null,
                    width: 500,
                    height: 333,
                    size: 34.17,
                    url: "/uploads/small_IMG_0917_b06f9f19e1.jpg",
                  },
                },
                hash: "IMG_0917_b06f9f19e1",
                ext: ".jpg",
                mime: "image/jpeg",
                size: 2019.81,
                url: "/uploads/IMG_0917_b06f9f19e1.jpg",
                previewUrl: null,
                provider: "local",
                provider_metadata: null,
                createdAt: "2022-07-19T11:46:44.391Z",
                updatedAt: "2022-07-19T11:46:44.391Z",
              },
            },
          },
          propertyphotos: {
            data: [
              {
                id: 2,
                attributes: {
                  name: "IMG_0972.jpg",
                  alternativeText: "IMG_0972.jpg",
                  caption: "IMG_0972.jpg",
                  width: 5760,
                  height: 3840,
                  formats: {
                    thumbnail: {
                      name: "thumbnail_IMG_0972.jpg",
                      hash: "thumbnail_IMG_0972_d8653fdd6f",
                      ext: ".jpg",
                      mime: "image/jpeg",
                      path: null,
                      width: 234,
                      height: 156,
                      size: 8.85,
                      url: "/uploads/thumbnail_IMG_0972_d8653fdd6f.jpg",
                    },
                    large: {
                      name: "large_IMG_0972.jpg",
                      hash: "large_IMG_0972_d8653fdd6f",
                      ext: ".jpg",
                      mime: "image/jpeg",
                      path: null,
                      width: 1000,
                      height: 667,
                      size: 87.63,
                      url: "/uploads/large_IMG_0972_d8653fdd6f.jpg",
                    },
                    medium: {
                      name: "medium_IMG_0972.jpg",
                      hash: "medium_IMG_0972_d8653fdd6f",
                      ext: ".jpg",
                      mime: "image/jpeg",
                      path: null,
                      width: 750,
                      height: 500,
                      size: 55.96,
                      url: "/uploads/medium_IMG_0972_d8653fdd6f.jpg",
                    },
                    small: {
                      name: "small_IMG_0972.jpg",
                      hash: "small_IMG_0972_d8653fdd6f",
                      ext: ".jpg",
                      mime: "image/jpeg",
                      path: null,
                      width: 500,
                      height: 333,
                      size: 29.09,
                      url: "/uploads/small_IMG_0972_d8653fdd6f.jpg",
                    },
                  },
                  hash: "IMG_0972_d8653fdd6f",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  size: 1226.05,
                  url: "/uploads/IMG_0972_d8653fdd6f.jpg",
                  previewUrl: null,
                  provider: "local",
                  provider_metadata: null,
                  createdAt: "2022-07-20T11:24:49.110Z",
                  updatedAt: "2022-07-20T11:24:49.110Z",
                },
              },
              {
                id: 3,
                attributes: {
                  name: "IMG_0948.jpg",
                  alternativeText: "IMG_0948.jpg",
                  caption: "IMG_0948.jpg",
                  width: 3840,
                  height: 5760,
                  formats: {
                    thumbnail: {
                      name: "thumbnail_IMG_0948.jpg",
                      hash: "thumbnail_IMG_0948_1e2d981d5d",
                      ext: ".jpg",
                      mime: "image/jpeg",
                      path: null,
                      width: 104,
                      height: 156,
                      size: 4.82,
                      url: "/uploads/thumbnail_IMG_0948_1e2d981d5d.jpg",
                    },
                    large: {
                      name: "large_IMG_0948.jpg",
                      hash: "large_IMG_0948_1e2d981d5d",
                      ext: ".jpg",
                      mime: "image/jpeg",
                      path: null,
                      width: 667,
                      height: 1000,
                      size: 77.14,
                      url: "/uploads/large_IMG_0948_1e2d981d5d.jpg",
                    },
                    medium: {
                      name: "medium_IMG_0948.jpg",
                      hash: "medium_IMG_0948_1e2d981d5d",
                      ext: ".jpg",
                      mime: "image/jpeg",
                      path: null,
                      width: 500,
                      height: 750,
                      size: 50.8,
                      url: "/uploads/medium_IMG_0948_1e2d981d5d.jpg",
                    },
                    small: {
                      name: "small_IMG_0948.jpg",
                      hash: "small_IMG_0948_1e2d981d5d",
                      ext: ".jpg",
                      mime: "image/jpeg",
                      path: null,
                      width: 333,
                      height: 500,
                      size: 27.82,
                      url: "/uploads/small_IMG_0948_1e2d981d5d.jpg",
                    },
                  },
                  hash: "IMG_0948_1e2d981d5d",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  size: 1219.57,
                  url: "/uploads/IMG_0948_1e2d981d5d.jpg",
                  previewUrl: null,
                  provider: "local",
                  provider_metadata: null,
                  createdAt: "2022-07-20T11:24:49.124Z",
                  updatedAt: "2022-07-20T11:24:49.124Z",
                },
              },
              {
                id: 4,
                attributes: {
                  name: "IMG_0981.jpg",
                  alternativeText: "IMG_0981.jpg",
                  caption: "IMG_0981.jpg",
                  width: 5760,
                  height: 3840,
                  formats: {
                    thumbnail: {
                      name: "thumbnail_IMG_0981.jpg",
                      hash: "thumbnail_IMG_0981_2ad21cf763",
                      ext: ".jpg",
                      mime: "image/jpeg",
                      path: null,
                      width: 234,
                      height: 156,
                      size: 10.64,
                      url: "/uploads/thumbnail_IMG_0981_2ad21cf763.jpg",
                    },
                    large: {
                      name: "large_IMG_0981.jpg",
                      hash: "large_IMG_0981_2ad21cf763",
                      ext: ".jpg",
                      mime: "image/jpeg",
                      path: null,
                      width: 1000,
                      height: 667,
                      size: 106.18,
                      url: "/uploads/large_IMG_0981_2ad21cf763.jpg",
                    },
                    medium: {
                      name: "medium_IMG_0981.jpg",
                      hash: "medium_IMG_0981_2ad21cf763",
                      ext: ".jpg",
                      mime: "image/jpeg",
                      path: null,
                      width: 750,
                      height: 500,
                      size: 68.31,
                      url: "/uploads/medium_IMG_0981_2ad21cf763.jpg",
                    },
                    small: {
                      name: "small_IMG_0981.jpg",
                      hash: "small_IMG_0981_2ad21cf763",
                      ext: ".jpg",
                      mime: "image/jpeg",
                      path: null,
                      width: 500,
                      height: 333,
                      size: 35.87,
                      url: "/uploads/small_IMG_0981_2ad21cf763.jpg",
                    },
                  },
                  hash: "IMG_0981_2ad21cf763",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  size: 1301.51,
                  url: "/uploads/IMG_0981_2ad21cf763.jpg",
                  previewUrl: null,
                  provider: "local",
                  provider_metadata: null,
                  createdAt: "2022-07-20T11:24:49.426Z",
                  updatedAt: "2022-07-20T11:24:49.426Z",
                },
              },
              {
                id: 5,
                attributes: {
                  name: "IMG_0966.jpg",
                  alternativeText: "IMG_0966.jpg",
                  caption: "IMG_0966.jpg",
                  width: 5760,
                  height: 3840,
                  formats: {
                    thumbnail: {
                      name: "thumbnail_IMG_0966.jpg",
                      hash: "thumbnail_IMG_0966_fd2cf0b865",
                      ext: ".jpg",
                      mime: "image/jpeg",
                      path: null,
                      width: 234,
                      height: 156,
                      size: 10.75,
                      url: "/uploads/thumbnail_IMG_0966_fd2cf0b865.jpg",
                    },
                    large: {
                      name: "large_IMG_0966.jpg",
                      hash: "large_IMG_0966_fd2cf0b865",
                      ext: ".jpg",
                      mime: "image/jpeg",
                      path: null,
                      width: 1000,
                      height: 667,
                      size: 117.52,
                      url: "/uploads/large_IMG_0966_fd2cf0b865.jpg",
                    },
                    medium: {
                      name: "medium_IMG_0966.jpg",
                      hash: "medium_IMG_0966_fd2cf0b865",
                      ext: ".jpg",
                      mime: "image/jpeg",
                      path: null,
                      width: 750,
                      height: 500,
                      size: 72.61,
                      url: "/uploads/medium_IMG_0966_fd2cf0b865.jpg",
                    },
                    small: {
                      name: "small_IMG_0966.jpg",
                      hash: "small_IMG_0966_fd2cf0b865",
                      ext: ".jpg",
                      mime: "image/jpeg",
                      path: null,
                      width: 500,
                      height: 333,
                      size: 36.26,
                      url: "/uploads/small_IMG_0966_fd2cf0b865.jpg",
                    },
                  },
                  hash: "IMG_0966_fd2cf0b865",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  size: 1921.64,
                  url: "/uploads/IMG_0966_fd2cf0b865.jpg",
                  previewUrl: null,
                  provider: "local",
                  provider_metadata: null,
                  createdAt: "2022-07-20T11:24:49.635Z",
                  updatedAt: "2022-07-20T11:24:49.635Z",
                },
              },
              {
                id: 6,
                attributes: {
                  name: "IMG_0996.jpg",
                  alternativeText: "IMG_0996.jpg",
                  caption: "IMG_0996.jpg",
                  width: 5760,
                  height: 3840,
                  formats: {
                    thumbnail: {
                      name: "thumbnail_IMG_0996.jpg",
                      hash: "thumbnail_IMG_0996_a9757bedd6",
                      ext: ".jpg",
                      mime: "image/jpeg",
                      path: null,
                      width: 234,
                      height: 156,
                      size: 10.73,
                      url: "/uploads/thumbnail_IMG_0996_a9757bedd6.jpg",
                    },
                    large: {
                      name: "large_IMG_0996.jpg",
                      hash: "large_IMG_0996_a9757bedd6",
                      ext: ".jpg",
                      mime: "image/jpeg",
                      path: null,
                      width: 1000,
                      height: 667,
                      size: 120.81,
                      url: "/uploads/large_IMG_0996_a9757bedd6.jpg",
                    },
                    medium: {
                      name: "medium_IMG_0996.jpg",
                      hash: "medium_IMG_0996_a9757bedd6",
                      ext: ".jpg",
                      mime: "image/jpeg",
                      path: null,
                      width: 750,
                      height: 500,
                      size: 75.05,
                      url: "/uploads/medium_IMG_0996_a9757bedd6.jpg",
                    },
                    small: {
                      name: "small_IMG_0996.jpg",
                      hash: "small_IMG_0996_a9757bedd6",
                      ext: ".jpg",
                      mime: "image/jpeg",
                      path: null,
                      width: 500,
                      height: 333,
                      size: 36.93,
                      url: "/uploads/small_IMG_0996_a9757bedd6.jpg",
                    },
                  },
                  hash: "IMG_0996_a9757bedd6",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  size: 1602.14,
                  url: "/uploads/IMG_0996_a9757bedd6.jpg",
                  previewUrl: null,
                  provider: "local",
                  provider_metadata: null,
                  createdAt: "2022-07-20T11:24:50.265Z",
                  updatedAt: "2022-07-20T11:24:50.265Z",
                },
              },
              {
                id: 7,
                attributes: {
                  name: "IMG_0942-HDR.jpg",
                  alternativeText: "IMG_0942-HDR.jpg",
                  caption: "IMG_0942-HDR.jpg",
                  width: 5684,
                  height: 3789,
                  formats: {
                    thumbnail: {
                      name: "thumbnail_IMG_0942-HDR.jpg",
                      hash: "thumbnail_IMG_0942_HDR_da66929265",
                      ext: ".jpg",
                      mime: "image/jpeg",
                      path: null,
                      width: 234,
                      height: 156,
                      size: 8.77,
                      url: "/uploads/thumbnail_IMG_0942_HDR_da66929265.jpg",
                    },
                    large: {
                      name: "large_IMG_0942-HDR.jpg",
                      hash: "large_IMG_0942_HDR_da66929265",
                      ext: ".jpg",
                      mime: "image/jpeg",
                      path: null,
                      width: 1000,
                      height: 666,
                      size: 93,
                      url: "/uploads/large_IMG_0942_HDR_da66929265.jpg",
                    },
                    medium: {
                      name: "medium_IMG_0942-HDR.jpg",
                      hash: "medium_IMG_0942_HDR_da66929265",
                      ext: ".jpg",
                      mime: "image/jpeg",
                      path: null,
                      width: 750,
                      height: 500,
                      size: 57.69,
                      url: "/uploads/medium_IMG_0942_HDR_da66929265.jpg",
                    },
                    small: {
                      name: "small_IMG_0942-HDR.jpg",
                      hash: "small_IMG_0942_HDR_da66929265",
                      ext: ".jpg",
                      mime: "image/jpeg",
                      path: null,
                      width: 500,
                      height: 333,
                      size: 29.03,
                      url: "/uploads/small_IMG_0942_HDR_da66929265.jpg",
                    },
                  },
                  hash: "IMG_0942_HDR_da66929265",
                  ext: ".jpg",
                  mime: "image/jpeg",
                  size: 1781.59,
                  url: "/uploads/IMG_0942_HDR_da66929265.jpg",
                  previewUrl: null,
                  provider: "local",
                  provider_metadata: null,
                  createdAt: "2022-07-20T11:24:50.350Z",
                  updatedAt: "2022-07-20T11:24:50.350Z",
                },
              },
            ],
          },
          location: {
            data: {
              id: 1,
              attributes: {
                Area: "Punta de Mita",
                createdAt: "2022-07-20T11:22:30.099Z",
                updatedAt: "2022-07-20T11:22:39.856Z",
                publishedAt: "2022-07-20T11:22:39.855Z",
              },
            },
          },
        },
      },
    ],
  };

  const handleChange = (e) => {
    const filter = allProperties;
    filter.data = filter.data.filter(
      (item) => item.attributes.location.data.attributes.Area === e.target.value
    );
    update(filter);
  };
  return (
    <div className="form-container">
      <form>
        <label htmlFor="location"></label>
        <select
          id="location"
          name="location"
          placeholder="Location"
          onChange={handleChange}
        >
          <option>All</option>
          {locations.data.map((item) => {
            return (
              <option key={item.id} value={item.attributes.Area}>
                {item.attributes.Area}
              </option>
            );
          })}
        </select>
        <label htmlFor="bedrooms"></label>
        <input
          type="number"
          id="bedrooms"
          name="bedrooms"
          maxLength="2"
          placeholder="Bedrooms"
        />
        <label htmlFor="occupation"></label>
        <input
          type="number"
          id="occupation"
          name="occupation"
          maxLength="2"
          placeholder="Occupation"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            return update(testObj);
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}