if(NOT TARGET fbjni::fbjni)
add_library(fbjni::fbjni SHARED IMPORTED)
set_target_properties(fbjni::fbjni PROPERTIES
    IMPORTED_LOCATION "/Users/yw.hao/.gradle/caches/transforms-3/5fef279603b2c7ec98cdde7b65ce4a9d/transformed/fbjni-0.2.2/prefab/modules/fbjni/libs/android.x86/libfbjni.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/yw.hao/.gradle/caches/transforms-3/5fef279603b2c7ec98cdde7b65ce4a9d/transformed/fbjni-0.2.2/prefab/modules/fbjni/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

