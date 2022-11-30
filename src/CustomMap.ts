export interface Markable {
  location: {
    lat: number;
    lng: number;
  };
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
    new google.maps.Marker({
      map: this.googleMap,
      position: { lat: markable.location.lat, lng: markable.location.lng },
    });
  }
}
