// Auto-generated. Do not edit!

// (in-package frontier_exploration.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class ExploreTaskFeedback {
  constructor() {
    this.next_frontier = new geometry_msgs.msg.PoseStamped();
    this.base_position = new geometry_msgs.msg.PoseStamped();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ExploreTaskFeedback
    // Serialize message field [next_frontier]
    bufferInfo = geometry_msgs.msg.PoseStamped.serialize(obj.next_frontier, bufferInfo);
    // Serialize message field [base_position]
    bufferInfo = geometry_msgs.msg.PoseStamped.serialize(obj.base_position, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ExploreTaskFeedback
    let tmp;
    let len;
    let data = new ExploreTaskFeedback();
    // Deserialize message field [next_frontier]
    tmp = geometry_msgs.msg.PoseStamped.deserialize(buffer);
    data.next_frontier = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [base_position]
    tmp = geometry_msgs.msg.PoseStamped.deserialize(buffer);
    data.base_position = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'frontier_exploration/ExploreTaskFeedback';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '00baaad5b6065fdad0f528586c3caaf2';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # ====== DO NOT MODIFY! AUTOGENERATED FROM AN ACTION DEFINITION ======
    #Current target frontier to explore
    geometry_msgs/PoseStamped next_frontier
    #Current position of robot
    geometry_msgs/PoseStamped base_position
    
    
    ================================================================================
    MSG: geometry_msgs/PoseStamped
    # A Pose with reference coordinate frame and timestamp
    Header header
    Pose pose
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    # 0: no frame
    # 1: global frame
    string frame_id
    
    ================================================================================
    MSG: geometry_msgs/Pose
    # A representation of pose in free space, composed of postion and orientation. 
    Point position
    Quaternion orientation
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    ================================================================================
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    `;
  }

};

module.exports = ExploreTaskFeedback;
