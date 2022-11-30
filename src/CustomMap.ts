export interface Markable {
  location: {
    lat: number;
    lng: number;
  };
  markerPopupContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(divId: string) {
    this.googleMap = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 3,
        center: { lat: 0, lng: 0 },
      }
    );
  }

  addMarker(markable: Markable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: { lat: markable.location.lat, lng: markable.location.lng },
    });

    marker.addListener('click', () => {
      const popup = new google.maps.InfoWindow({
        content: markable.markerPopupContent(),
      });

      popup.open(this.googleMap, marker);
    });
  }
}
