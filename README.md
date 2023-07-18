# Kubernetes Management Tool (NodeJS)

![Logo](./docs/k8stools.png)

The Kubernetes Management Tool is a powerful and user-friendly application built in NodeJS that simplifies the management and monitoring of Kubernetes clusters. With this tool, you can efficiently handle the deployment, scaling, and monitoring of your applications running on Kubernetes.

## Features

- **Cluster Management**: Easily connect to your Kubernetes clusters and manage them from a single interface. The tool supports multiple cluster configurations, allowing you to switch between clusters effortlessly.
  
- **Deployment**: Seamlessly deploy your applications to Kubernetes clusters with just a few clicks. The tool provides an intuitive interface for specifying deployment configurations, including container images, replica counts, resource limits, and more.

- **Scaling**: Scale your applications horizontally or vertically based on demand. The tool offers a straightforward way to adjust the number of replicas and allocate resources as needed.

- **Monitoring**: Gain insights into the health and performance of your Kubernetes applications through real-time monitoring. The tool integrates with popular monitoring solutions, such as Prometheus and Grafana, to provide comprehensive visibility into your cluster's metrics.

- **Logging**: Stream and analyze logs generated by your applications running on Kubernetes. The tool integrates with logging platforms like ELK Stack or Fluentd, allowing you to troubleshoot issues and gain deeper insights into your application's behavior.

- **Resource Management**: Efficiently manage Kubernetes resources, including pods, services, deployments, and more. The tool provides a simplified interface for creating, updating, and deleting resources, reducing the need for manual YAML editing.

- **Health Checks**: Perform health checks on your applications and receive alerts in case of failures. The tool supports defining custom health checks based on HTTP endpoints or specific metrics, ensuring the continuous availability of your applications.

## Pre-conditions

To run `k8s-tool`, you'll need to have a working Kubernetes enviroment and at least one namespace. 

Make sure that you can run: `kubectl get namespace` successfully. 

## Installation

Follow these steps:

1. Clone this repository: `git clone https://github.com/Boozang-Technologies/k8s-tool`
2. Navigate to the project directory: `cd k8s-tool`
3. Install dependencies using npm: `npm install`
4. Start tool: `npm start`
5. Open your browser and navigate to `http://localhost:8866` to access the tool's web interface.

## Configuration

The settings file (`config/env/setting.txt`) allows you to customize the tool based on your specific requirements. All these seetings can be set in the tool, and will be saved here to persist your settings between sessions. This means you can keep many configurations, and simply swap this file out between settings.

To remove all your customization, simply remove `settings.txt` and restart the tool.

## Contributing

Contributions are welcome! If you encounter any issues, have feature requests, or want to contribute to the project, please create an issue or submit a pull request in the [GitHub repository](https://github.com/your-username/kubernetes-management-tool).

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

We would like to thank the following open-source projects for their contributions:

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com
