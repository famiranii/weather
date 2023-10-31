export default function weatherHook(code: number) {
    let interpretation: string;
  
    if (code === 0) {
      interpretation = "Clear sky";
    } else if (code === 1 || code === 2 || code === 3) {
      interpretation = "Mainly clear, partly cloudy, and overcast";
    } else if (code === 45 || code === 48) {
      interpretation = "Fog and depositing rime fog";
    } else if (code === 51 || code === 53 || code === 55) {
      interpretation = "Drizzle: Light, moderate, and dense intensity";
    } else if (code === 56 || code === 57) {
      interpretation = "Freezing Drizzle: Light and dense intensity";
    } else if (code === 61 || code === 63 || code === 65) {
      interpretation = "Rain: Slight, moderate, and heavy intensity";
    } else if (code === 66 || code === 67) {
      interpretation = "Freezing Rain: Light and heavy intensity";
    } else if (code === 71 || code === 73 || code === 75) {
      interpretation = "Snow fall: Slight, moderate, and heavy intensity";
    } else if (code === 77) {
      interpretation = "Snow grains";
    } else if (code === 80 || code === 81 || code === 82) {
      interpretation = "Rain showers: Slight, moderate, and violent";
    } else if (code === 85 || code === 86) {
      interpretation = "Snow showers slight and heavy";
    } else if (code === 95) {
      interpretation = "Thunderstorm: Slight or moderate";
    } else if (code === 96 || code === 99) {
      interpretation = "Thunderstorm with slight and heavy hail";
    } else {
      interpretation = "Other interpretations for unspecified codes";
    }
  
    return interpretation 
  }
  