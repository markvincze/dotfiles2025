import type {
  BatteryOutput,
  CpuOutput,
  KeyboardOutput,
  MemoryOutput,
  NetworkOutput,
  WeatherOutput,
} from "zebar";

interface StatusProps {
  network: NetworkOutput | null;
  memory: MemoryOutput | null;
  cpu: CpuOutput | null;
  battery: BatteryOutput | null;
  keyboard: KeyboardOutput | null;
  weather: WeatherOutput | null;
}

// Get icon to show for current network status.
function getNetworkIcon(networkOutput: NetworkOutput) {
  switch (networkOutput.defaultInterface?.type) {
    case "ethernet":
      return <i className="nf nf-md-ethernet_cable"></i>;
    case "proprietary_virtual":
      return <i className="nf nf-md-shield_lock_outline"></i>;
    case "wifi":
      if (
        networkOutput.defaultGateway?.signalStrength === null ||
        networkOutput.defaultGateway?.signalStrength === undefined
      ) {
        return <i className="nf nf-md-wifi_strength_outline"></i>;
      } else if (networkOutput.defaultGateway?.signalStrength >= 80) {
        return <i className="nf nf-md-wifi_strength_4"></i>;
      } else if (networkOutput.defaultGateway?.signalStrength >= 65) {
        return <i className="nf nf-md-wifi_strength_3"></i>;
      } else if (networkOutput.defaultGateway?.signalStrength >= 40) {
        return <i className="nf nf-md-wifi_strength_2"></i>;
      } else if (networkOutput.defaultGateway?.signalStrength >= 25) {
        return <i className="nf nf-md-wifi_strength_1"></i>;
      } else {
        return <i className="nf nf-md-wifi_strength_outline"></i>;
      }
    default:
      return <i className="nf nf-md-wifi_strength_off_outline"></i>;
  }
}

// Get icon to show for how much of the battery is charged.
function getBatteryIcon(batteryOutput: BatteryOutput) {
  if (batteryOutput.chargePercent > 90)
    return <i className="nf nf-fa-battery_4"></i>;
  if (batteryOutput.chargePercent > 70)
    return <i className="nf nf-fa-battery_3"></i>;
  if (batteryOutput.chargePercent > 40)
    return <i className="nf nf-fa-battery_2"></i>;
  if (batteryOutput.chargePercent > 20)
    return <i className="nf nf-fa-battery_1"></i>;
  return <i className="nf nf-fa-battery_0"></i>;
}

// Get icon to show for current weather status.
function getWeatherIcon(weatherOutput: WeatherOutput) {
  switch (weatherOutput.status) {
    case "clear_day":
      return <i className="nf nf-weather-day_sunny"></i>;
    case "clear_night":
      return <i className="nf nf-weather-night_clear"></i>;
    case "cloudy_day":
      return <i className="nf nf-weather-day_cloudy"></i>;
    case "cloudy_night":
      return <i className="nf nf-weather-night_alt_cloudy"></i>;
    case "light_rain_day":
      return <i className="nf nf-weather-day_sprinkle"></i>;
    case "light_rain_night":
      return <i className="nf nf-weather-night_alt_sprinkle"></i>;
    case "heavy_rain_day":
      return <i className="nf nf-weather-day_rain"></i>;
    case "heavy_rain_night":
      return <i className="nf nf-weather-night_alt_rain"></i>;
    case "snow_day":
      return <i className="nf nf-weather-day_snow"></i>;
    case "snow_night":
      return <i className="nf nf-weather-night_alt_snow"></i>;
    case "thunder_day":
      return <i className="nf nf-weather-day_lightning"></i>;
    case "thunder_night":
      return <i className="nf nf-weather-night_alt_lightning"></i>;
  }
}

const Status = ({
  network,
  memory,
  cpu,
  battery,
  keyboard,
  weather,
}: StatusProps) => {
  return (
    <>
      <div className="bar-block statuses">
        {network && (
          <div className="network">
            {getNetworkIcon(network)}
            {network.defaultGateway?.ssid}
          </div>
        )}
        {memory && (
          <div className="memory">
            <i className="nf nf-fae-chip"></i>
            {Math.round(memory.usage)}%
          </div>
        )}
        {cpu && (
          <div className="cpu">
            <i className="nf nf-oct-cpu"></i>
            {/* Change the text color if the CPU usage is high. */}
            <span className={cpu.usage > 85 ? "high-usage" : ""}>
              {Math.round(cpu.usage)}%
            </span>
          </div>
        )}
        {battery && (
          <div className="battery">
            {/* Show icon for whether battery is charging. */}
            {battery.isCharging && (
              <i className="nf nf-md-power_plug charging-icon"></i>
            )}
            {getBatteryIcon(battery)}
            {Math.round(battery.chargePercent)}%
          </div>
        )}
        {keyboard && (
          <div className="keyboard">
            <i className="nf nf-fa-keyboard"></i>
            {keyboard.layout}
          </div>
        )}
        {weather && (
          <div className="weather">
            {getWeatherIcon(weather)}
            {Math.round(weather.celsiusTemp)}°C
          </div>
        )}
      </div>
    </>
  );
};

export default Status;
