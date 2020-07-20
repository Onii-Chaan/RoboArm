# RoboArm
# Table of contents
- [Usage](https://github.com/Onii-Chaan/Bottlender-prototype#usage)
- [Libraries used](https://github.com/Onii-Chaan/Bottlender-prototype#libraries-used)
  - [Hardware](https://github.com/Onii-Chaan/Bottlender-prototype#hardware)
  - [App](https://github.com/Onii-Chaan/Bottlender-prototype#app)
- [Setup](https://github.com/Onii-Chaan/Bottlender-prototype#setup)
    - [Hardware setup](https://github.com/Onii-Chaan/Bottlender-prototype#hardwaresetup)
    - [App setup](https://github.com/Onii-Chaan/Bottlender-prototype#appsetup)
- [Circuit & result](https://github.com/Onii-Chaan/Bottlender-prototype#circuit--result)

# Usage

Hardware and mobile app code for Robotic Arm that is controlled by Arduino Nano. There are two main function that arm can do. One is manual control, where you can control all arm movements via app. Second function is auto, where has been programmed to take ball from bottom and put it on top of roller coaster, so the ball could roll back and be picked up again. There is no mechanical part description in this documentation. **Bluetooth 4.0 module will be needed to receive data from app.**

# Libraries used
## Hardware
- ```BtClassic.h``` custom made library for receiving and processing incoming bluetooth data, described here
- ```Servo.h``` standard Arduino Servo motor library
- ```DcMotor.h``` custom made library for driving DC motors using l293d motor driver IC, described here
- ```Motor.h``` custom made library for driving stepper motors using A4988 driver, descibed here
- ```Arduino.h```

## App
The app was written in nativescript using Angular framework, following modules will be needed
- ```Bluetooth```
- ```NativeScriptFormsModule```
- ```NativeScriptUISideDrawerModule```


# Setup
## App
This repository contains whole build for app, because some recent releases were buggy and did not run the code properly. Other than that, you have to install all the app modules needed for the app. After that, app should be good to go. 

## Hardware
You should upload code to arduino using PlatformIO. This repository contains whole build. 



# Circuit & result

Video of finished project: https://www.youtube.com/watch?v=O2iHu1yMV9s&feature=youtu.be

![Result](https://i.ibb.co/nwwz8gj/e4db8ad2-091f-4b30-bb62-2ad6d9fb1fb2.jpg)