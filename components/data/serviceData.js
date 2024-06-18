export class ServiceData {
  constructor() {
    this.services = [
      {
        id: "quality-materials",
        title: "Quality Materials",
        highlight: "top3",
        description:
          "We use the best materials to ensure the longevity of your roof.",
        icon: "/assets/img/icon/service_icon01.svg",
      },
      {
        id: "expert-staff",
        title: "Expert Staff",
        highlight: "top3",
        description:
          "Our staff is highly trained and experienced in all things roofing.",
        icon: "/assets/img/icon/service_icon02.svg",
      },
      {
        id: "satisfaction-guaranteed",
        title: "Satisfaction Guaranteed",
        highlight: "top3",
        description: "We guarantee you will be satisfied with our work.",
        icon: "/assets/img/icon/service_icon03.svg",
      },
      {
        id: "siding-corner",
        highlight: "areas",
        title: "Siding Corner",
        description: "We specialize in siding corner installations.",
        icon: "/assets/img/icon/services_icon01.svg",
      },
      {
        id: "roofing-layers",
        highlight: "areas",
        title: "Roofing Layers",
        description:
          "We offer multiple layers of roofing for added protection.",
        icon: "/assets/img/icon/services_icon02.svg",
      },
      {
        id: "roof-repair",
        highlight: "areas",
        title: "Roof Repair",
        description: "We can repair any type of roof damage.",
        icon: "/assets/img/icon/services_icon03.svg",
      },
      {
        id: "roof-renovation",
        highlight: "areas",
        title: "Roof Renovation",
        description: "We can renovate your roof to look brand new.",
        icon: "/assets/img/icon/services_icon04.svg",
      },
      {
        id: "roof-maintenance",
        highlight: "areas",
        title: "Roof Maintenance",
        description:
          "We offer maintenance services to keep your roof in top shape.",
        icon: "/assets/img/icon/services_icon05.svg",
      },
      {
        id: "roof-animation",
        highlight: "areas",
        title: "Roof Animation",
        description: "We can create a 3D animation of your roof.",
        icon: "/assets/img/icon/services_icon06.svg",
      },
    ];
  }

  allServices() {
    return this.services;
  }

  findHighlights(highlight) {
    return this.services.filter((service) => service.highlight === highlight);
  }
}
